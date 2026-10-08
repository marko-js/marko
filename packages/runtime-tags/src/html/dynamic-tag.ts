import { assertValidTagName } from "../common/errors";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
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
import { _attr_select_value, _attrs, _attrs_textarea_value } from "./attrs";
import { type Locals, registerAccess } from "./serializer";
import type { ServerRenderer } from "./template";
import {
  _el,
  _existing_scope,
  _html,
  _peek_scope_id,
  _scope_reason,
  _resume,
  _scope,
  _scope_id,
  _script,
  _set_scope_reason,
  CLIENT_ALL,
  SERVER_ALL,
  applyBranchStart,
  deferBranchStart,
  getChunk,
  getScopeById,
  getState,
  markContentRendered,
  rendererKey,
  withBranchId,
  withUnpatched,
  patchWait,
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
  markerGuard?: 1 | 0,
  // Passed by a debug build's compiler for a tag variable.
  tagVar?: 1,
  // `1` pairs and re-renders the tag, `3` pairs it keeping the live branch,
  // `2` skips it (its renderer derives from a client-owned group).
  patchPairing?: 1 | 2 | 3,
) => {
  const shouldResume = markerGuard !== 0;
  // A patch entry may target this tag: its branch marks and pairs, while
  // the child's data still serializes on the tag's own reason.
  const marks = shouldResume || patchPairing;
  const pairs = patchPairing === 1 || patchPairing === 3;
  const renderer = normalizeDynamicRenderer<ServerRenderer>(tag);
  const state = getState()!;
  // The resumed page renders a tag no patch pairs (as with `writeBranch`),
  // so the flush waits for its lazy renderer's module, as that render will.
  if (!pairs && state.writesPatches) {
    const readyId = (renderer as ServerRenderer)?.[RendererProp.ReadyId];
    if (readyId) patchWait(state, readyId);
    return;
  }
  const branchId = _peek_scope_id();
  // A null renderer still renders the body: its writes pair too.
  if (patchPairing && (renderer || content)) {
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
            _attrs_textarea_value(
              branchId,
              MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a",
              input,
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
                      markerGuard,
                      undefined,
                      patchPairing,
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
              markerGuard,
              undefined,
              patchPairing,
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
    // A tag no patch pairs renders unpatched: the resumed page
    // re-renders it, so no patch fills its reads.
    if (!pairs && state.patchPage) withUnpatched(renderNative);
    else renderNative();

    // Registered, not written: the getter only reaches the wire when a tag
    // variable holds it. It reads this scope's node visit, not the branch.
    result = _el(scopeId, DYNAMIC_TAG_VAR_REGISTER_ID + accessor);
  } else {
    if (MARKO_DEBUG && tagVar && renderer?.[RendererProp.Lazy]) {
      throw new Error(
        `A dynamic tag with a [tag variable](https://markojs.com/docs/reference/language#tag-variables) rendered \`${renderer[RendererProp.Id]}\`, which is lazily loaded, so it does not support one. Import it without \`load\`, or remove the variable.`,
      );
    }

    const chunk = getChunk()!;
    const beforeBranch = marks ? deferBranchStart(chunk) : undefined;

    const render = () => {
      const { state } = chunk.boundary;
      if (state.writesPatches) markContentRendered(state, renderer || content);
      if (renderer) {
        try {
          // The child's groups are unknown: a patch page writes the tag even
          // where nothing resumes; elsewhere the client may re-render it.
          _set_scope_reason(
            shouldResume || state.writesPatches
              ? state.patchPage
                ? SERVER_ALL
                : CLIENT_ALL
              : 0,
          );
          return inputIsArgs
            ? renderer(...(inputOrArgs as unknown[]))
            : renderer(
                content
                  ? { ...(inputOrArgs as Record<string, unknown>), content }
                  : inputOrArgs,
              );
        } finally {
          _set_scope_reason(undefined);
        }
      } else if (content) {
        // A falsy name renders only its body; `content=` is input for a named tag.
        // With no tag, the body's `<return>` is not its variable.
        content();
      }
    };
    const run =
      !pairs && state.patchPage ? () => withUnpatched(render) : render;
    // A kept renderer's body pairs with the live branch, so it renders
    // outside the branch id context that seeds a constant group's holes.
    result = marks && patchPairing !== 3 ? withBranchId(branchId, run) : run();
    rendered = _peek_scope_id() !== branchId;

    if (beforeBranch !== undefined) {
      applyBranchStart(chunk, beforeBranch, rendered);
      _html(
        state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + (rendered ? " " + branchId : ""),
        ),
      );
      // Unlike a known tag's child scope, no link ships this one, so it flushes
      // here with the tag variable its template's `<return>` may call.
      if (renderer) _existing_scope(branchId);
    }
  }

  if (rendered) {
    // A patched tag keeps its key so a patch naming the same renderer pairs
    // by id alone.
    if (shouldResume || (patchPairing && typeof renderer === "function")) {
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
  if (state?.writesPatches) (state.withheldContents ??= new Set()).add(id);
  return content(id, fn, scopeId);
}

function content(id: string, fn: ServerRenderer, scopeId?: number) {
  fn[RendererProp.Id] = id;
  // The owner id the client derives from `RendererProp.Owner`; both sides key a
  // content instance by it, so they must be written from the same scope.
  fn[RendererProp.Owner] = scopeId;
  return fn;
}

// Registered content carries what its scopes may lack: the values of an
// attribute tag `<for>` that creates it, and closures unseen code may need.
export function _content_resume(
  id: string,
  fn: ServerRenderer,
  scopeId?: number,
  locals?: Locals,
) {
  return _resume(_content(id, fn, scopeId), id, scopeId, locals);
}

// Content with no client renderer elides its slot to `0`.
export function _content_elide(
  id: string,
  fn: ServerRenderer,
  scopeId: number | undefined,
) {
  return registerAccess(_content(id, fn, scopeId), "0");
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
      tagVar,
      patchPairing,
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
        tagVar,
        patchPairing,
      );
    };
  }
)(_dynamic_tag);
