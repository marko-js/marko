import { types as t } from "@marko/compiler";
import { isOutputHTML } from "../util/marko-config";
import {
  Tag,
  assertAllowedAttributes,
  assertNoVar,
  getTagDef,
} from "@marko/babel-utils";
import * as writer from "../util/writer";
import * as walks from "../util/walks";
import {
  getSignal,
  setSubscriberBuilder,
  setRegisterScopeBuilder,
  writeHTMLResumeStatements,
  getSerializedScopeProperties,
  addValue,
  getTagParamsSignal,
  getClosures,
} from "../util/signals";
import {
  getOrCreateSection,
  getScopeIdentifier,
  getScopeIdIdentifier,
  getSection,
} from "../util/sections";
import {
  ReserveType,
  reserveScope,
  getScopeAccessorLiteral,
} from "../util/reserve";
import { callRuntime, importRuntime } from "../util/runtime";
import analyzeAttributeTags from "../util/nested-attribute-tags";
import customTag from "../visitors/tag/custom-tag";
import { mergeReferences } from "../util/references";
import {
  currentProgramPath,
  dirtyIdentifier,
  scopeIdentifier,
} from "../visitors/program";

export default {
  analyze: {
    enter(tag) {
      const isOnlyChild = checkOnlyChild(tag);
      const parentTag = (
        isOnlyChild ? tag.parentPath.parent : undefined
      ) as t.MarkoTag;
      const parentTagName = (parentTag?.name as t.StringLiteral)?.value;
      reserveScope(
        ReserveType.Visit,
        getOrCreateSection(tag),
        isOnlyChild ? parentTag : tag.node,
        "for",
        isOnlyChild ? `#${parentTagName}` : "#text"
      );
      customTag.analyze.enter(tag);
    },
    exit(tag) {
      analyzeAttributeTags(tag);

      const section = getOrCreateSection(tag);
      tag.node.extra.attrsReferences = mergeReferences(
        section,
        tag.node.attributes
          .filter(
            (attr) =>
              t.isMarkoAttribute(attr) &&
              attr.extra?.valueReferences !== undefined
          )
          .map((attr) => [attr.extra, "valueReferences"])
      );

      tag.node.extra.isStateful =
        !!tag.node.extra.attrsReferences &&
        !Object.keys(tag.node.extra.nestedAttributeTags).length;
      tag.node.extra.singleNodeOptimization = tag.node.body.body.length === 1;
    },
  },
  translate: {
    enter(tag) {
      validateFor(tag);

      if (
        !isOutputHTML() &&
        Object.keys(tag.node.extra.nestedAttributeTags).length
      ) {
        tag.remove();
        return;
      }

      const {
        extra: { isOnlyChild },
      } = tag.node;
      if (!isOnlyChild) {
        walks.visit(tag, walks.WalkCodes.Replace);
        walks.enterShallow(tag);
      }
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
    },
    exit(tag) {
      if (isOutputHTML()) {
        translateHTML.exit(tag);
      } else {
        translateDOM.exit(tag);
      }
    },
  },
  attributes: {
    of: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over a list of items.",
        },
      ],
    },
    in: {
      type: "expression",
      autocomplete: [
        {
          description: "Iterates over the keys and values of an object.",
        },
      ],
    },
    to: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates up to the provided number (inclusive)",
        },
      ],
    },
    from: {
      type: "number",
      autocomplete: [
        {
          description: "Iterates starting from the provided number (inclusive)",
        },
      ],
    },
    step: {
      type: "number",
      autocomplete: [
        {
          description:
            "The amount to increment during each interation (with from/to)",
        },
      ],
    },
  },
  autocomplete: [
    {
      snippet: "for|${1:value, index}| of=${3:array}",
      description:
        "Use to iterate over lists, object properties, or between ranges.",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-a-list",
    },
    {
      snippet: "for|${1:name, value}| in=${3:object}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-over-an-objects-properties",
    },
    {
      snippet:
        "for|${1:index}| from=${2:number} to=${3:number} step=${4:number}",
      descriptionMoreURL:
        "https://markojs.com/docs/core-tags/#iterating-between-a-range-of-numbers",
    },
  ],
} as Tag;

const translateDOM = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const bodySection = getSection(tag.get("body"));
    const section = getSection(tag);
    const { node } = tag;
    const {
      attributes,
      body: { params },
      extra: { isOnlyChild, attrsReferences },
    } = node;
    const paramsPath = tag.get("body").get("params");
    const {
      extra: { reserve },
    } = isOnlyChild ? (tag.parentPath.parent as t.MarkoTag) : tag.node;

    setSubscriberBuilder(tag, (signal: t.Expression) => {
      return t.expressionStatement(
        callRuntime(
          "inLoopScope",
          scopeIdentifier,
          dirtyIdentifier,
          signal,
          getScopeAccessorLiteral(reserve!)
        )
      );
    });

    tag.remove();

    const rendererId = writer.getRenderer(bodySection);

    const ofAttr = findName(attributes, "of");
    const toAttr = findName(attributes, "to");
    const inAttr = findName(attributes, "in");

    let loopFunctionBody: t.Expression | t.BlockStatement = t.nullLiteral();
    let tagParams = params;
    if (ofAttr) {
      const byAttr = findName(attributes, "by");
      loopFunctionBody = t.arrayExpression([
        ofAttr.value,
        byAttr ? byAttr.value : t.nullLiteral(),
      ]);
    } else if (toAttr) {
      const fromAttr = findName(attributes, "from");
      const stepAttr = findName(attributes, "step");

      loopFunctionBody = callRuntime(
        "computeLoopToFrom",
        toAttr.value,
        fromAttr ? fromAttr.value : t.numericLiteral(0),
        stepAttr ? stepAttr.value : t.numericLiteral(1)
      );
    } else if (inAttr) {
      loopFunctionBody = callRuntime("computeLoopIn", inAttr.value);
      tagParams = [t.arrayPattern(params)];
    }

    const signal = getSignal(section, reserve);
    const paramsSignal = getTagParamsSignal(
      paramsPath,
      t.arrayPattern(tagParams)
    );
    signal.build = () => {
      return callRuntime(
        "loop",
        getScopeAccessorLiteral(reserve!),
        rendererId,
        paramsSignal?.build()
      );
    };

    signal.hasDownstreamIntersections = () =>
      paramsSignal?.hasDownstreamIntersections() ||
      getClosures(bodySection).length > 0;

    addValue(section, attrsReferences, signal, loopFunctionBody);
  },
};

const translateHTML = {
  exit(tag: t.NodePath<t.MarkoTag>) {
    const section = getSection(tag);
    const tagBody = tag.get("body");
    const bodySection = getSection(tagBody);
    const { node } = tag;
    const {
      attributes,
      body: { body, params },
      extra: { isStateful, singleNodeOptimization, isOnlyChild },
    } = node;
    const {
      extra: { reserve },
    } = isOnlyChild ? (tag.parentPath.parent as t.MarkoTag) : node;
    const namePath = tag.get("name");
    const ofAttr = findName(attributes, "of");
    const inAttr = findName(attributes, "in");
    const toAttr = findName(attributes, "to");
    const byAttr = findName(attributes, "by");
    const block = t.blockStatement(body);
    const write = writer.writeTo(tag);
    const replacement: t.Node[] = [];
    let byParams: t.Expression[];
    let keyExpression: t.Expression | undefined = t.identifier("NOO");

    if (isStateful) {
      if (!singleNodeOptimization) {
        writer.writePrependTo(tagBody)`${callRuntime(
          "markResumeScopeStart",
          getScopeIdIdentifier(bodySection)
        )}`;
      }
      setRegisterScopeBuilder(tag, (scope: t.Expression) => {
        const tempScopeIdentifier =
          currentProgramPath.scope.generateUidIdentifier("s");
        return t.callExpression(
          t.arrowFunctionExpression(
            [tempScopeIdentifier],
            t.sequenceExpression([
              t.callExpression(
                t.memberExpression(
                  getScopeIdentifier(bodySection),
                  t.identifier("set")
                ),
                [keyExpression!, tempScopeIdentifier]
              ),
              tempScopeIdentifier,
            ])
          ),
          [scope]
        );
      });
      getSerializedScopeProperties(bodySection).set(
        importRuntime("SYMBOL_OWNER"),
        getScopeIdIdentifier(section)
      );
    }

    if (byAttr && isStateful) {
      const byIdentifier = currentProgramPath.scope.generateUidIdentifier("by");
      replacement.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(byIdentifier, byAttr.value!),
        ])
      );
      byParams = [];
      keyExpression = t.callExpression(byIdentifier, byParams);
    }

    if (inAttr) {
      const [keyParam, valParam] = params;

      keyExpression = keyParam as t.Identifier;

      if (valParam) {
        // TODO: account for keyParam being a non identifier.
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              valParam,
              t.memberExpression(inAttr.value!, keyParam as t.Identifier, true)
            ),
          ])
        );
      }

      replacement.push(
        t.forInStatement(
          t.variableDeclaration("const", [t.variableDeclarator(keyParam)]),
          inAttr.value!,
          block
        )
      );
    } else if (ofAttr) {
      let ofAttrValue = ofAttr.value!;
      // eslint-disable-next-line prefer-const
      let [valParam, indexParam, loopParam] = params;

      if (!valParam) {
        throw namePath.buildCodeFrameError(
          "Invalid 'for of' tag, missing |value, index| params."
        );
      }

      if (!t.isIdentifier(valParam) && byParams!) {
        const tempValParam =
          currentProgramPath.scope.generateUidIdentifier("v");
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(valParam, tempValParam),
          ])
        );
        valParam = tempValParam;
      }

      if (indexParam || isStateful) {
        indexParam ??= currentProgramPath.scope.generateUidIdentifier("i");
        const indexName = tag.scope.generateUidIdentifierBasedOnNode(
          indexParam,
          "i"
        );
        replacement.push(
          t.variableDeclaration("let", [
            t.variableDeclarator(indexName, t.numericLiteral(0)),
          ])
        );

        block.body.unshift(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              indexParam,
              t.updateExpression("++", indexName)
            ),
          ])
        );
      }

      if (loopParam) {
        if (t.isIdentifier(loopParam)) {
          ofAttrValue = loopParam;
        }

        replacement.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(loopParam, ofAttr.value),
          ])
        );
      }

      if (byParams!) {
        byParams.push(valParam as t.Identifier, indexParam as t.Identifier);
      } else {
        keyExpression = indexParam as t.Identifier;
      }

      replacement.push(
        t.forOfStatement(
          t.variableDeclaration("const", [t.variableDeclarator(valParam)]),
          ofAttrValue,
          block
        )
      );
    } else if (toAttr) {
      const stepValue =
        findName(attributes, "step")?.value ?? t.numericLiteral(1);
      const fromValue =
        findName(attributes, "from")?.value ?? t.numericLiteral(0);
      let [indexParam] = params;
      const stepsName = tag.scope.generateUidIdentifier("steps");
      const indexName = tag.scope.generateUidIdentifier("i");
      const stepName = tag.scope.generateUidIdentifier("step");
      const fromName = tag.scope.generateUidIdentifier("from");

      if (indexParam || isStateful) {
        indexParam ??= currentProgramPath.scope.generateUidIdentifier("i");
        keyExpression = indexParam as t.Identifier;
        block.body.unshift(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              indexParam,
              t.binaryExpression(
                "+",
                fromName,
                t.binaryExpression("*", indexName, stepName)
              )
            ),
          ])
        );
      }

      replacement.push(
        t.forStatement(
          t.variableDeclaration("let", [
            t.variableDeclarator(
              fromName,
              t.logicalExpression("??", fromValue, t.numericLiteral(0))
            ),
            t.variableDeclarator(
              stepName,
              t.logicalExpression("??", stepValue, t.numericLiteral(1))
            ),
            t.variableDeclarator(
              stepsName,
              t.binaryExpression(
                "/",
                t.binaryExpression("-", toAttr.value, fromName),
                stepName
              )
            ),
            t.variableDeclarator(indexName, t.numericLiteral(0)),
          ]),
          t.binaryExpression("<=", indexName, stepsName),
          t.updateExpression("++", indexName),
          block
        )
      );
    }

    if (isStateful) {
      const forScopeIdsIdentifier =
        tag.scope.generateUidIdentifier("forScopeIds");
      const forScopesIdentifier = getScopeIdentifier(bodySection);

      replacement.unshift(
        t.variableDeclaration(
          "const",
          [
            singleNodeOptimization &&
              t.variableDeclarator(
                forScopeIdsIdentifier,
                t.arrayExpression([])
              ),
            t.variableDeclarator(
              forScopesIdentifier,
              t.newExpression(t.identifier("Map"), [])
            ),
          ].filter(Boolean) as t.VariableDeclarator[]
        )
      );

      if (singleNodeOptimization) {
        block.body.push(
          t.expressionStatement(
            t.callExpression(
              t.memberExpression(forScopeIdsIdentifier, t.identifier("push")),
              [getScopeIdIdentifier(bodySection)]
            )
          )
        );
        write`${callRuntime(
          "markResumeControlSingleNodeEnd",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(reserve!),
          forScopeIdsIdentifier
        )}`;
      } else {
        write`${callRuntime(
          "markResumeControlEnd",
          getScopeIdIdentifier(section),
          getScopeAccessorLiteral(reserve!)
        )}`;
      }
      getSerializedScopeProperties(section).set(
        t.stringLiteral(getScopeAccessorLiteral(reserve!).value + "("),
        t.conditionalExpression(
          t.memberExpression(forScopesIdentifier, t.identifier("size")),
          forScopesIdentifier,
          t.identifier("undefined")
        )
      );
    }

    writer.flushInto(tag);
    writeHTMLResumeStatements(tagBody);

    block.body.push(t.expressionStatement(callRuntime("maybeFlush")));

    tag.replaceWithMultiple(replacement);
  },
};

function findName(
  arr: (t.MarkoAttribute | t.MarkoSpreadAttribute)[],
  value: string
) {
  return arr.find((obj) => t.isMarkoAttribute(obj) && obj.name === value);
}

function validateFor(tag: t.NodePath<t.MarkoTag>) {
  const attrs = tag.node.attributes;
  const hasParams = tag.node.body.params.length > 0;

  assertNoVar(tag);

  if (findName(attrs, "of")) {
    assertAllowedAttributes(tag, ["of", "by"]);
    if (!hasParams) {
      throw tag.buildCodeFrameError(
        `Invalid 'for of' tag, missing |value, index| params.`
      );
    }
  } else if (findName(attrs, "in")) {
    assertAllowedAttributes(tag, ["in", "by"]);
    if (!hasParams) {
      throw tag.buildCodeFrameError(
        `Invalid 'for in' tag, missing |key, value| params.`
      );
    }
  } else if (findName(attrs, "to")) {
    assertAllowedAttributes(tag, ["from", "to", "step", "by"]);
  } else {
    throw tag.buildCodeFrameError(
      "Invalid 'for' tag, missing an 'of', 'in' or 'to' attribute."
    );
  }
}

function checkOnlyChild(tag: t.NodePath<t.MarkoTag>) {
  tag.node.extra ??= {} as any;
  if (
    t.isMarkoTag(tag.parentPath?.parent) &&
    getTagDef(tag.parentPath!.parentPath! as t.NodePath<t.MarkoTag>)?.html
  ) {
    return (tag.node.extra.isOnlyChild =
      (tag.parent as t.MarkoTagBody).body.length === 1);
  }
  return (tag.node.extra.isOnlyChild = false);
}
