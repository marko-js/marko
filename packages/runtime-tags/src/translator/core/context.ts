import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  getProgram,
  loadFileForImport,
  type Tag,
} from "@marko/compiler/babel-utils";

import type { AccessorProp } from "../../common/types";
import { assertNoBodyContent, assertNoSpreadAttrs } from "../util/assert";
import { generateUidIdentifier } from "../util/generate-uid";
import { getAccessorPrefix, getAccessorProp } from "../util/get-accessor-char";
import { isOptimize } from "../util/marko-config";
import {
  type Binding,
  BindingType,
  getScopeAccessorLiteral,
  mergeReferences,
  pruneBinding,
  trackVarReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import { getScopeExpression } from "../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "../util/sections";
import { getExprIfSerialized } from "../util/serialize-guard";
import {
  addSerializeReason,
  type SerializeReason,
} from "../util/serialize-reasons";
import { addSetupStatement } from "../util/setup-statements";
import {
  addStatement,
  addValue,
  getResumeRegisterId,
  initValue,
  setSectionSerializedValue,
} from "../util/signals";
import { createSectionState } from "../util/state";
import translateVar from "../util/translate-var";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

// Cross-template flags, set once at the provider's own analyze exit; a
// mid-analysis reentrant read sees them unset and uses conservative defaults.
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    providesContext?: true;
    contextMutable?: boolean;
    contextWritable?: true;
    [kProvideInfo]?: {
      writable: boolean;
      valueExtra: t.NodeExtra;
      section: Section;
    };
    /** Statically known server-only provider ids consumed anywhere under
     * this template (content rendered through dynamic holes is instead
     * reserved at render time by the html content runtimes). */
    consumedContexts?: Set<string>;
    [kSelfConsumes]?: Section[];
    [kRecursiveRefs]?: Section[];
  }

  export interface MarkoTagExtra {
    contextProviderId?: string;
    contextProviderRequest?: string;
    contextProviderMutable?: boolean;
    contextProviderWritable?: boolean;
    /** Shared by same-section consumers of one provider (a shared scope):
     * they compose into a single wiring entry (one link + fan-out signal). */
    contextConsumers?: Binding[];
  }
}

export const kProvideInfo: unique symbol = Symbol("context provide info");
export const kSelfConsumes: unique symbol = Symbol("context self consumes");
export const kRecursiveRefs: unique symbol = Symbol("context recursive refs");

// Server-only context ids consumed beneath each section (bubbled to
// ancestors); a client-re-renderable branch serializes the boxes its
// subtree may consume (`_context_reserve`), keeping every other page free
// of context payload bytes.
const sectionConsumedContexts = new WeakMap<Section, Set<string>>();

export function addConsumedContext(
  section: Section | undefined,
  ids: Set<string> | string | undefined,
) {
  if (!ids || (typeof ids === "object" && !ids.size)) return;
  for (let cur = section; cur; cur = cur.parent) {
    let set = sectionConsumedContexts.get(cur);
    if (!set) {
      sectionConsumedContexts.set(cur, (set = new Set()));
    }
    if (typeof ids === "string") {
      set.add(ids);
    } else {
      for (const id of ids) set.add(id);
    }
  }
}

export function getConsumedContexts(section: Section) {
  return sectionConsumedContexts.get(section);
}

// Statement for a client-re-renderable branch site whose subtree consumes
// statically known server-only contexts; `undefined` when the site cannot
// re-render client-side or nothing known is consumed. Unknowable subtrees
// (dynamic holes) are instead reserved at render time by the content
// runtimes, so branches never server-rendered cover only known ids.
export function buildContextReserve(
  section: Section,
  rerenderReason: SerializeReason | undefined,
  bodySections: (Section | undefined)[],
): t.Statement | undefined {
  if (!rerenderReason) return;
  let consumed: Set<string> | undefined;
  for (const body of bodySections) {
    const cur = body && sectionConsumedContexts.get(body);
    if (cur) {
      if (consumed) {
        for (const id of cur) consumed.add(id);
      } else {
        consumed = new Set(cur);
      }
    }
  }
  if (!consumed) return;

  const gated = getExprIfSerialized(
    section,
    rerenderReason,
    callRuntime(
      "_context_reserve",
      ...[...consumed].sort().map((id) => t.stringLiteral(id)),
    ),
  );
  return gated && t.expressionStatement(gated);
}

// Groups same-section consumers per provider during analyze (phase-local;
// the group crosses to translate via each tag's `contextConsumers` extra).
const [getConsumerGroups] = createSectionState<Map<string, Binding[]>>(
  "contextConsumers",
  () => new Map(),
);

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoSpreadAttrs(tag);

    const { node } = tag;
    let valueAttr: t.MarkoAttribute | undefined;
    let valueChangeAttr: t.MarkoAttribute | undefined;
    let fromAttr: t.MarkoAttribute | undefined;

    for (const attr of node.attributes) {
      const markoAttr = attr as t.MarkoAttribute;
      if (markoAttr.name === "from") {
        fromAttr = markoAttr;
      } else if (markoAttr.name === "valueChange") {
        valueChangeAttr = markoAttr;
      } else if (markoAttr.default || markoAttr.name === "value") {
        valueAttr = markoAttr;
      } else {
        throw buildAttrError(
          tag,
          markoAttr,
          "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) only supports the `value=` (default/bind) attribute, `valueChange=`, and `from=`.",
        );
      }
    }

    if (fromAttr) {
      analyzeConsume(tag, fromAttr, valueAttr, valueChangeAttr);
    } else if (valueAttr) {
      analyzeProvide(tag, valueAttr, valueChangeAttr);
    } else if (node.var) {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) requires a `from=` attribute when consuming a context with a tag variable.",
        );
    } else {
      throw tag
        .get("name")
        .buildCodeFrameError(
          "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) requires either a provided value (eg `<context=value>`) or a `from=` attribute to consume a context.",
        );
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (isProvide(tag)) {
          writer.flushBefore(tag);
        }
      },
      exit(tag) {
        if (isProvide(tag)) {
          translateProvideHTML(tag);
        } else {
          translateConsumeHTML(tag);
        }
      },
    },
    dom: {
      enter(tag) {
        if (isProvide(tag)) {
          // Emitted at enter so a client-created provider's value and
          // branch stamp precede any same-section consumer's read.
          translateProvideDOMStatements(tag);
        }
      },
      exit(tag) {
        if (isProvide(tag)) {
          translateProvideDOM(tag);
        } else {
          translateConsumeDOM(tag);
        }
      },
    },
  }),
  attributes: {},
  autocomplete: [
    {
      displayText: "context=<value>",
      description: "Provides a value to its body content.",
      snippet: "context=${1:value}",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#context",
    },
    {
      displayText: 'context/<var> from="<tag>"',
      description: "Consumes a value provided by another template.",
      descriptionMoreURL: "https://markojs.com/docs/reference/core-tag#context",
    },
  ],
  types: runtimeInfo.name + "/tags/context.d.marko",
} as Tag;

function isProvide(tag: t.NodePath<t.MarkoTag>) {
  return !tag.node.extra?.contextProviderId;
}

function analyzeProvide(
  tag: t.NodePath<t.MarkoTag>,
  valueAttr: t.MarkoAttribute,
  valueChangeAttr: t.MarkoAttribute | undefined,
) {
  const { node } = tag;

  if (node.var) {
    throw tag
      .get("var")
      .buildCodeFrameError(
        "A [`<context>` provider](https://markojs.com/docs/reference/core-tag#context) does not take a tag variable; use `from=` on a separate `<context>` tag to consume it.",
      );
  }

  if (node.body.attributeTags) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) does not support attribute tags.",
      );
  }

  const program = getProgram();
  const programExtra = (program.node.extra ??= {});
  if (programExtra[kProvideInfo]) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "A template may only have a single provide-mode [`<context>` tag](https://markojs.com/docs/reference/core-tag#context); more than one makes the template's identity as a context provider ambiguous.",
      );
  }

  if (!node.body.body.length) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "A [`<context>` provider](https://markojs.com/docs/reference/core-tag#context) requires [body content](https://markojs.com/docs/reference/language#tag-content); wrap the tags that should see the provided value.",
      );
  }

  const section = getOrCreateSection(tag);
  const tagExtra = mergeReferences(section, node, [valueAttr.value]);

  if (valueChangeAttr) {
    // The change handler serializes (registered) so resumed consumers can
    // invoke it through the link.
    (valueChangeAttr.value.extra ??= {}).isEffect = true;
    addSerializeReason(section, true, contextChangeAccessor());
  }

  programExtra[kProvideInfo] = {
    writable: !!valueChangeAttr,
    valueExtra: tagExtra,
    section,
  };
}

function analyzeConsume(
  tag: t.NodePath<t.MarkoTag>,
  fromAttr: t.MarkoAttribute,
  valueAttr: t.MarkoAttribute | undefined,
  valueChangeAttr: t.MarkoAttribute | undefined,
) {
  const { node } = tag;
  assertNoBodyContent(tag);

  if (valueAttr) {
    throw buildAttrError(
      tag,
      valueAttr,
      "A [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) cannot both provide a value and consume one via `from=`.",
    );
  }

  if (valueChangeAttr) {
    throw buildAttrError(
      tag,
      valueChangeAttr,
      "The `valueChange=` attribute is only supported on a provide-mode [`<context>` tag](https://markojs.com/docs/reference/core-tag#context).",
    );
  }

  if (!node.var) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) requires a [tag variable](https://markojs.com/docs/reference/language#tag-variables) to consume a context.",
      );
  }

  if (!t.isIdentifier(node.var)) {
    throw tag
      .get("var")
      .buildCodeFrameError(
        "The [`<context>` tag](https://markojs.com/docs/reference/core-tag#context) consumer variable cannot be destructured.",
      );
  }

  if (!t.isStringLiteral(fromAttr.value)) {
    throw buildAttrError(
      tag,
      fromAttr,
      'The `from=` attribute must be a static string literal (eg `from="<my-tag>"` or `from="./provider.marko"`).',
    );
  }

  const request = fromAttr.value.value;
  let providerFile;

  try {
    providerFile = loadFileForImport(tag.hub.file, request);
  } catch (err) {
    throw buildAttrError(
      tag,
      fromAttr,
      `Unable to resolve the \`from=\` template ${JSON.stringify(request)}: ${
        (err as Error).message
      }`,
    );
  }

  if (!providerFile) {
    throw buildAttrError(
      tag,
      fromAttr,
      `Unable to resolve the \`from=\` template ${JSON.stringify(request)}.`,
    );
  }

  const providerExtra = providerFile.ast.program.extra ?? {};
  // A self-referencing `from=` resolves to this same mid-analysis file, whose
  // flags are not final yet -- answer from its AST and force the mutable tier
  // (the program-exit hook makes the provide side match).
  const self = providerFile === tag.hub.file;
  const selfProvide = self
    ? findProvideTag(providerFile.ast.program)
    : undefined;

  if (self ? !selfProvide : !providerExtra.providesContext) {
    throw buildAttrError(
      tag,
      fromAttr,
      `The template ${JSON.stringify(request)} does not provide a <context> value (it has no provide-mode \`<context>\` tag).`,
    );
  }

  // Conservative defaults where flags are not final yet: a reentrant cycle
  // is treated as read-only and mutable, and a self-consume as mutable (its
  // tier is refined at translate once the provide side is classified).
  const writable = self
    ? hasValueChangeAttr(selfProvide!)
    : !!providerExtra.contextWritable;
  const mutable = self || (providerExtra.contextMutable ?? true);

  // A mutable context's consumer variable changes client-side (fan-out), so
  // it is tracked like a `<let>` for serialize reasons and the update graph.
  const varBinding = trackVarReferences(
    tag,
    mutable ? BindingType.let : BindingType.derived,
  )!;
  const tagExtra = (node.extra ??= {});
  const section = getOrCreateSection(tag);

  // Conservative: translate skips emission for pruned consumers, but that is
  // only known after this analyze pass.
  addSetupStatement(section);

  if (mutable) {
    const providerId = providerFile.metadata.marko.id;
    const group = getConsumerGroups(section);
    let members = group.get(providerId);
    if (members) {
      members.push(varBinding);
    } else {
      group.set(providerId, (members = [varBinding]));
    }
    tagExtra.contextConsumers = members;
    if (self) {
      // A self-consume may drop to the immutable tier at the program exit
      // hook; its section joins the consumed-context sets there.
      ((getProgram().node.extra ??= {})[kSelfConsumes] ??= []).push(section);
    }
  } else {
    addConsumedContext(section, providerFile.metadata.marko.id);
  }

  if (varBinding.assignmentSections && !writable) {
    const babelBinding = tag.scope.getBinding(node.var.name)!;
    const violation = babelBinding.constantViolations[0];
    throw (violation ?? tag.get("var")).buildCodeFrameError(
      `Cannot assign to \`${node.var.name}\`; the <context> provider for ${JSON.stringify(request)} is read-only. Add \`:=\` to the provider's default attribute to make it writable.`,
    );
  }

  tagExtra.contextProviderId = providerFile.metadata.marko.id;
  tagExtra.contextProviderRequest = request;
  tagExtra.contextProviderMutable = mutable;
  tagExtra.contextProviderWritable = writable;
}

// Provides compile inline into the parent section (`isNativeNode`, like
// `<show>`): the body runs once in place; `withContext` only needs a closure.
function translateProvideHTML(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { valueAttr, valueChangeAttr } = getContextAttrs(node);
  const programExtra = getProgram().node.extra!;
  const mutable = !!programExtra.contextMutable;
  const section = getSection(tag);
  writer.flushInto(tag);

  if (valueChangeAttr) {
    setSectionSerializedValue(
      section,
      contextChangeAccessor(),
      t.logicalExpression(
        "||",
        valueChangeAttr.value,
        t.unaryExpression("void", t.numericLiteral(0)),
      ),
    );
  }

  const bodyStatements = node.body.body as unknown as t.Statement[];
  const providerId = tag.hub.file.metadata.marko.id;

  tag
    .replaceWith(
      t.expressionStatement(
        callRuntime(
          "_context_provide",
          t.stringLiteral(providerId),
          valueAttr!.value,
          t.arrowFunctionExpression([], t.blockStatement(bodyStatements)),
          mutable ? getScopeIdIdentifier(section) : undefined,
        ),
      ),
    )[0]
    .skip();
}

function translateConsumeHTML(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const tagExtra = node.extra!;
  const providerId = tagExtra.contextProviderId!;
  const varBinding = (node.var as t.Identifier).extra!.binding!;
  const debugName =
    !isOptimize() && t.stringLiteral(tagExtra.contextProviderRequest!);
  let read: t.Expression;

  if (isMutableTierConsume(tag) && getWiringLead(tag) === varBinding) {
    const section = getSection(tag);
    read = callRuntime(
      "_context_link",
      getScopeIdIdentifier(section),
      t.stringLiteral(providerId),
      t.stringLiteral(getResumeRegisterId(section, varBinding, "context")),
      debugName,
    );
  } else {
    read = callRuntime("_context_get", t.stringLiteral(providerId), debugName);
  }

  // `let` matches `<let>`'s server semantics for the writable form: an
  // SSR-time assignment mutates the local for the remainder of the render.
  translateVar(tag, read, tagExtra.contextProviderWritable ? "let" : "const");
  tag.remove();
}

function translateProvideDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const programExtra = getProgram().node.extra!;
  const section = getSection(tag);
  const tagExtra = node.extra!;
  const { valueAttr, valueChangeAttr } = getContextAttrs(node);
  const providerId = t.stringLiteral(tag.hub.file.metadata.marko.id);

  if (programExtra.contextMutable) {
    addStatement(
      "render",
      section,
      tagExtra.referencedBindings,
      t.expressionStatement(
        callRuntime(
          "_context_value",
          scopeIdentifier,
          valueAttr!.value,
          providerId,
        ),
      ),
    );
    addStatement(
      "render",
      section,
      undefined,
      t.expressionStatement(
        callRuntime("_context_branch", scopeIdentifier, providerId),
      ),
    );

    if (valueChangeAttr) {
      addStatement(
        "render",
        section,
        valueChangeAttr.value.extra?.referencedBindings,
        t.expressionStatement(
          callRuntime(
            "_context_change",
            scopeIdentifier,
            valueChangeAttr.value,
          ),
        ),
      );
    }
  }

  // Both tiers splice the body inline.
  const bodyStatements = node.body.body as unknown as t.Statement[];
  for (const replacement of tag.replaceWithMultiple(bodyStatements)) {
    replacement.skip();
  }
}

// A client-created immutable provider stamps its branch and value like the
// serialized box (evaluating the value under client `$global` rules); the
// tree-shaken bundle drops this when the provider only renders server-side.
function translateProvideDOMStatements(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  if (getProgram().node.extra!.contextMutable) return;
  const section = getSection(tag);
  const { valueAttr } = getContextAttrs(node);

  addStatement(
    "render",
    section,
    node.extra!.referencedBindings,
    t.expressionStatement(
      t.assignmentExpression(
        "=",
        t.memberExpression(
          scopeIdentifier,
          t.stringLiteral(getAccessorProp().ContextValue),
          true,
        ),
        valueAttr!.value,
      ),
    ),
  );
  addStatement(
    "render",
    section,
    undefined,
    t.expressionStatement(
      callRuntime(
        "_context_branch",
        scopeIdentifier,
        t.stringLiteral(tag.hub.file.metadata.marko.id),
      ),
    ),
  );
}

// Immutable: the serialized slot, or resolve the reserved box when created
// client-side. Mutable: a registered fan-out signal from setup.
function translateConsumeDOM(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const tagExtra = node.extra!;
  const section = getSection(tag);
  const varBinding = (node.var as t.Identifier).extra!.binding!;

  if (isMutableTierConsume(tag)) {
    const providerId = tagExtra.contextProviderId!;
    if (!consumerNeedsWiring(varBinding)) {
      tag.remove();
      return;
    }

    if (tagExtra.contextProviderWritable) {
      initValue(varBinding).buildAssignment = (valueSection, value) =>
        callRuntime(
          "_context_write",
          getScopeExpression(valueSection, section),
          t.stringLiteral(providerId),
          value,
        );
    }

    if (getWiringLead(tag) !== varBinding) {
      tag.remove();
      return;
    }

    const scopeParam = generateUidIdentifier("scope");
    const providerParam = generateUidIdentifier("provider");
    const wrapperId = generateUidIdentifier(
      `context_${(node.var as t.Identifier).name}`,
    );
    const memberCalls = tagExtra
      .contextConsumers!.filter((member) => !pruneBinding(member))
      .map((member) =>
        t.callExpression(initValue(member).identifier, [
          t.identifier(scopeParam.name),
          t.memberExpression(
            t.identifier(providerParam.name),
            t.stringLiteral(getAccessorProp().ContextValue),
            true,
          ),
        ]),
      );

    getProgram().node.body.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          wrapperId,
          callRuntime(
            "_context_closure",
            t.stringLiteral(providerId),
            t.arrowFunctionExpression(
              [scopeParam, providerParam],
              memberCalls.length > 1
                ? t.sequenceExpression(memberCalls)
                : (memberCalls[0] ?? t.blockStatement([])),
            ),
            t.stringLiteral(
              getResumeRegisterId(section, varBinding, "context"),
            ),
            !isOptimize() && t.stringLiteral(tagExtra.contextProviderRequest!),
          ),
        ),
      ]),
    );

    addStatement(
      "render",
      section,
      undefined,
      t.expressionStatement(t.callExpression(wrapperId, [scopeIdentifier])),
    );
  } else {
    const signal = initValue(varBinding);

    // Slot when server-rendered, resolved from the reserved box when the
    // consumer is created client-side.
    addValue(
      section,
      undefined,
      signal,
      callRuntime(
        "_context_read",
        scopeIdentifier,
        getScopeAccessorLiteral(varBinding, true),
        t.stringLiteral(tagExtra.contextProviderId!),
        !isOptimize() && t.stringLiteral(tagExtra.contextProviderRequest!),
      ),
    );
  }

  tag.remove();
}

// Wiring matters only when the value is observable client-side: any read
// keeps the binding un-pruned; assignments need the link for writes.
function consumerNeedsWiring(binding: Binding) {
  return !pruneBinding(binding) || !!binding.assignmentSections;
}

// A self-consume is conservatively mutable at analyze (the provide side is
// classified later); by translate the program flag is final, so a
// server-only self-consume drops to the immutable tier.
function isMutableTierConsume(tag: t.NodePath<t.MarkoTag>) {
  const tagExtra = tag.node.extra!;
  return (
    !!tagExtra.contextProviderMutable &&
    (tagExtra.contextProviderId !== tag.hub.file.metadata.marko.id ||
      getProgram().node.extra!.contextMutable !== false)
  );
}

// The first group member needing wiring carries the group's single link and
// composed fan-out signal; `undefined` means the group serializes nothing.
function getWiringLead(tag: t.NodePath<t.MarkoTag>) {
  return tag.node.extra!.contextConsumers!.find(consumerNeedsWiring);
}

function getContextAttrs(node: t.MarkoTag) {
  let valueAttr: t.MarkoAttribute | undefined;
  let valueChangeAttr: t.MarkoAttribute | undefined;
  for (const attr of node.attributes) {
    const markoAttr = attr as t.MarkoAttribute;
    if (markoAttr.name === "valueChange") {
      valueChangeAttr = markoAttr;
    } else if (markoAttr.default || markoAttr.name === "value") {
      valueAttr = markoAttr;
    }
  }
  return { valueAttr, valueChangeAttr };
}

// Syntactic scan for a provide-mode `<context>` (used for self-referencing
// `from=`, where the program's own flags are not final yet).
function findProvideTag(node: t.Node): t.MarkoTag | undefined {
  if (t.isMarkoTag(node)) {
    if (
      t.isStringLiteral(node.name, { value: "context" }) &&
      !node.attributes.some(
        (attr) => t.isMarkoAttribute(attr) && attr.name === "from",
      ) &&
      node.attributes.some(
        (attr) =>
          t.isMarkoAttribute(attr) && (attr.default || attr.name === "value"),
      )
    ) {
      return node;
    }
  }

  for (const child of t.isProgram(node) || t.isMarkoTagBody(node)
    ? node.body
    : t.isMarkoTag(node)
      ? node.body.body
      : []) {
    const found = findProvideTag(child);
    if (found) return found;
  }
}

function hasValueChangeAttr(tag: t.MarkoTag) {
  return tag.attributes.some(
    (attr) => t.isMarkoAttribute(attr) && attr.name === "valueChange",
  );
}

// Mirrors `changeAccessor` in dom/context.ts.
function contextChangeAccessor() {
  return (getAccessorPrefix().TagVariableChange +
    getAccessorProp().ContextValue) as AccessorProp;
}

function buildAttrError(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
  message: string,
) {
  const attrPath = tag.get("attributes").find((a) => a.node === attr) as
    t.NodePath<t.MarkoAttribute> | undefined;
  return (attrPath ?? tag.get("name")).buildCodeFrameError(message);
}
