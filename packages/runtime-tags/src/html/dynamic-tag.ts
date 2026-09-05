import { assertValidTagName } from "../common/errors";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  CONTENT_REGISTER_ID,
  DYNAMIC_TAG_SCRIPT_REGISTER_ID,
  DYNAMIC_TAG_VAR_REGISTER_ID,
} from "../common/meta";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  RendererProp,
  ResumeSymbol,
} from "../common/types";
import { _attr_select_value, _attr_textarea_value, _attrs } from "./attrs";
import { registerAccess, toAccess, toObjectKey } from "./serializer";
import { shellRecords, shells } from "./shells";
import type { ServerRenderer } from "./template";
import {
  _el,
  _html,
  _peek_scope_id,
  _persisted_reason,
  _resume,
  _scope,
  _scope_id,
  _script,
  _set_serialize_reason,
  applyBranchStart,
  deferBranchStart,
  getChunk,
  elidedContents,
  getScopeById,
  getState,
  rendererKey,
  withBranchId,
} from "./writer";

const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
interface BodyContentObject {
  [x: PropertyKey]: unknown;
  content: ServerRenderer;
}

export let _dynamic_tag = (
  scopeId: number,
  accessor: Accessor,
  tag: unknown | string | ServerRenderer | BodyContentObject,
  inputOrArgs: unknown,
  content?: (() => void) | 0,
  inputIsArgs?: 1,
  serializeReason?: 1 | 0,
  patches?: 1,
) => {
  const shouldResume = serializeReason !== 0;
  // A patch entry may target this site: its branch marks and pairs, while
  // the child's data still serializes on the site's own reason.
  const marks = shouldResume || patches;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
  const state = getState()!;
  const branchId = _peek_scope_id();
  // A null renderer still renders the body: its writes pair too.
  if (patches && (renderer || content)) {
    state.pairBranch?.(
      scopeId,
      accessor,
      branchId,
      undefined,
      undefined,
      typeof renderer === "function" ? renderer[RendererProp.Owner] : undefined,
    );
  }
  let rendered: boolean;
  let result: unknown;

  if (typeof renderer === "string") {
    // Debug-only: the name is written into markup unescaped, so passing a
    // sanitized value is the caller's contract rather than a runtime guarantee.
    if (MARKO_DEBUG) {
      assertValidTagName(renderer);
    }

    const input = ((inputIsArgs
      ? (inputOrArgs as unknown[])[0]
      : inputOrArgs) || {}) as Record<string, unknown>;
    rendered = true;
    const renderNative = () => {
      _scope_id();
      _html(
        `<${renderer}${_attrs(input, MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a", branchId, renderer)}>`,
      );

      if (!voidElementsReg.test(renderer)) {
        const renderContent =
          content || normalizeDynamicRenderer<ServerRenderer>(input.content);
        if (renderer === "textarea") {
          if (MARKO_DEBUG && renderContent) {
            throw new Error(
              "A dynamic tag rendering a `<textarea>` cannot have `content` and must use the `value` attribute instead.",
            );
          }
          _html(
            _attr_textarea_value(
              branchId,
              MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a",
              input.value,
              input.valueChange,
              1,
            ),
          );
        } else {
          if (renderContent && typeof renderContent !== "function") {
            throw new Error(
              `Body content is not supported for the \`<${renderer}>\` tag.`,
            );
          }

          if (
            renderer === "select" &&
            ("value" in input || "valueChange" in input)
          ) {
            // Only this case defers the body, so it renders inside the
            // dynamically scoped selected value; every other tag recurses directly.
            _attr_select_value(
              branchId,
              MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a",
              input.value,
              input.valueChange,
              renderContent
                ? () =>
                    _dynamic_tag(
                      branchId,
                      MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a",
                      renderContent,
                      undefined,
                      0,
                      undefined,
                      serializeReason,
                      patches,
                    )
                : undefined,
              1,
            );
          } else if (renderContent) {
            // The body is a branch of the native tag's scope: it pairs too.
            _dynamic_tag(
              branchId,
              MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a",
              renderContent,
              undefined,
              0,
              undefined,
              serializeReason,
              patches,
            );
          }
        }

        _html(`</${renderer}>`);
      } else if (MARKO_DEBUG && content) {
        throw new Error(
          `Body content is not supported for the \`<${renderer}>\` tag.`,
        );
      }

      const childScope = getScopeById(branchId);
      const needsScript =
        childScope &&
        (childScope[
          AccessorPrefix.EventAttributes +
            (MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a")
        ] ||
          childScope[
            AccessorPrefix.ControlledHandler +
              (MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a")
          ]);

      if (needsScript) {
        // The debug accessor is this write's only consumer, and `needsScript`
        // already means the branch scope ships.
        if (MARKO_DEBUG) {
          _scope(branchId, { [AccessorProp.Renderer]: renderer });
        }
        _script(branchId, DYNAMIC_TAG_SCRIPT_REGISTER_ID);
      }

      if (marks || needsScript) {
        _html(
          state.mark(
            ResumeSymbol.BranchEndNativeTag,
            scopeId + " " + accessor + " " + branchId,
          ),
        );
      }
    };
    renderNative();

    // Registered, not written: the getter only reaches the wire when a tag
    // variable holds it, so a native dynamic tag without one pays nothing.
    result = _el(branchId, DYNAMIC_TAG_VAR_REGISTER_ID);
  } else {
    const chunk = getChunk()!;
    const beforeBranch = marks ? deferBranchStart(chunk) : undefined;

    const render = () => {
      const { state } = chunk.boundary;
      if (state.writesPatches) {
        const rendered = (renderer || content) as
          | { [RendererProp.Id]?: string }
          | 0
          | undefined;
        const id = rendered ? rendered[RendererProp.Id] : undefined;
        if (id) (state.renderedContents ??= new Set()).add(id);
      }
      if (renderer) {
        try {
          _set_serialize_reason(
            shouldResume && inputOrArgs !== undefined ? 1 : 0,
          );
          return inputIsArgs
            ? renderer(...(inputOrArgs as unknown[]))
            : renderer(
                content
                  ? { ...(inputOrArgs as Record<string, unknown>), content }
                  : inputOrArgs,
              );
        } finally {
          _set_serialize_reason(undefined);
        }
      } else if (content) {
        return content();
      }
    };
    result = marks ? withBranchId(branchId, render) : render();
    rendered = _peek_scope_id() !== branchId;

    if (beforeBranch !== undefined) {
      applyBranchStart(chunk, beforeBranch, rendered);
      _html(
        state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + (rendered ? " " + branchId : ""),
        ),
      );
    }
  }

  if (rendered) {
    // A patched site keeps its key so a shell record pairs by id alone.
    if (
      shouldResume ||
      (patches &&
        typeof renderer === "function" &&
        shells[renderer[RendererProp.Id]!])
    ) {
      _scope(scopeId, {
        [AccessorPrefix.ConditionalRenderer + accessor]: rendererKey(renderer),
      });
    }
  } else {
    _scope_id();
  }

  return result;
};

export function _content(id: string, fn: ServerRenderer, scopeId?: number) {
  // Also called at module load (template definitions), outside any render.
  const state = getChunk()?.boundary.state;
  if (state?.writesPatches) (state.createdContents ??= new Set()).add(id);
  return content(id, fn, scopeId);
}

function content(id: string, fn: ServerRenderer, scopeId?: number) {
  fn[RendererProp.Id] = id;
  // The owner id the client derives from `RendererProp.Owner`; both sides key a
  // content instance by it, so they must be written from the same scope.
  fn[RendererProp.Owner] = scopeId;
  return fn;
}

export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
) {
  return _resume(_content(id, fn, scopeId), id, scopeId);
}

// Content with no client renderer elides its slot: a catch slot serializes
// `0` (its frame carries html), a placeholder slot `undefined`.
export function _content_elide(
  id: string,
  fn: ServerRenderer,
  scopeId: number | undefined,
  placeholder?: 1,
) {
  elidedContents.add(fn);
  // No client renderer registers for it, so no fill could reach it.
  return registerAccess(content(id, fn, scopeId), placeholder ? "void 0" : "0");
}

// A static shell record renders server-side and rides its slot in-band, so
// gated markup only reaches responses rendered for this user.
const contentAccessPrefix =
  "_._" +
  /*@__PURE__*/ toAccess(/*@__PURE__*/ toObjectKey(CONTENT_REGISTER_ID)) +
  "(";
export function _content_record(id: string, scopeId: number | undefined) {
  const record = shellRecords[id];
  const template = record.slice(record.indexOf(",") + 1);
  return registerAccess(
    _content(
      id,
      () => {
        _persisted_reason();
        _scope_id();
        _html(template);
      },
      scopeId,
    ),
    contentAccessPrefix +
      shells[id].slice(1) +
      (scopeId === undefined ? ")" : ",_(" + scopeId + "))"),
  );
}

export const patchDynamicTag = /* @__PURE__ */ (
  (originalDynamicTag) =>
  (patch: (tag: unknown, scopeId: number, accessor: Accessor) => unknown) => {
    _dynamic_tag = (
      scopeId,
      accessor,
      tag,
      input,
      content,
      inputIsArgs,
      resume,
      patches,
    ) => {
      const patched = patch(tag, scopeId, accessor);
      if (patched !== tag)
        (patched as ServerRenderer)[RendererProp.Id] = tag as string;
      return originalDynamicTag(
        scopeId,
        accessor,
        patched,
        input,
        content,
        inputIsArgs,
        resume,
        patches,
      );
    };
  }
)(_dynamic_tag);
