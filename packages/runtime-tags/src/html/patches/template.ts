import { ROOT_SCOPE_ID } from "../../common/meta";
import {
  PatchKey,
  type RenderedTemplate,
  RendererProp,
  type Template,
  type TemplateInput,
} from "../../common/types";
import { type ServerRenderer, _template, startRender } from "../template";
import { _peek_scope_id, getState } from "../writer";
import { decodeHeld } from "./token";
import {
  PatchRenderState,
  PatchUpdateState,
  patchBuildPrefix,
  patchGlobals,
  patchNode,
  ensureScopePatch,
} from "./writer";

export function _template_patch(
  templateId: string,
  renderer: ServerRenderer,
  page?: 0 | 1,
) {
  const template = _template(templateId, renderer, page as 1) as Template &
    ServerRenderer;
  template.render = renderPage;
  template.patch = renderPatch;
  return template;
}

// A patch template's document tracks the structure no patch fills.
function renderPage(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
): RenderedTemplate {
  return startRender(this, input, PatchRenderState);
}

function renderPatch(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
  headers?: PatchHeaders,
): RenderedTemplate {
  // Patches answer page navigations only; an embedded render (a micro-frame)
  // has no page whose shells the token could name.
  if (this[RendererProp.Embed]) {
    throw new Error(
      "Marko patches only render page templates; this template renders embedded, so request it as a document.",
    );
  }
  // Globals re-ship every flush, undefined included, so the live page's
  // `$global` never reads stale.
  const root = (input: unknown) => {
    const state = getState() as PatchUpdateState;
    if (MARKO_DEBUG && _peek_scope_id() !== ROOT_SCOPE_ID) {
      throw new Error("A patch render must start at the page root's scope.");
    }
    // The request's token after its build: what the page holds, which this
    // render adds to.
    const token = headers && readHeader(headers, "x-marko-patch");
    const held = token && token.slice(token.indexOf(";") + 1);
    if (held) {
      state.sentShells = decodeHeld(held);
      state.heldCount = state.sentShells?.size || 0;
    }
    const globals = patchGlobals(state.$global);
    if (globals) {
      ensureScopePatch(state, ROOT_SCOPE_ID)[PatchKey.Globals] = patchNode(
        state,
        globals,
      );
    }
    return this(input);
  };
  return startRender(root, input, PatchUpdateState);
}

/** A request's headers: a `Headers` or a plain record. */
export type PatchHeaders =
  | Record<string, string | undefined>
  | { get(name: string): string | null };

/** What a request asks of the server's build: `"patch"` from its own page, or
 * `"stale"` from another build's, to answer before rendering anything. */
export function patchRequest(headers: PatchHeaders) {
  const value = readHeader(headers, "x-marko-patch");
  return value == null
    ? undefined
    : value.startsWith(patchBuildPrefix)
      ? ("patch" as const)
      : ("stale" as const);
}

/** The headers to add for a request of `kind`: every page varies on the
 * request, and a patch is uncached JavaScript marked as a patch. */
export function patchResponseHeaders(
  kind: ReturnType<typeof patchRequest>,
): Record<string, string> {
  return kind === "patch"
    ? {
        vary: "x-marko-patch",
        "content-type": "text/javascript;charset=UTF-8",
        "cache-control": "no-store",
        "x-marko-patch": "1",
      }
    : { vary: "x-marko-patch" };
}

function readHeader(headers: PatchHeaders, name: string) {
  return typeof headers.get === "function"
    ? headers.get(name)
    : (headers as Record<string, string | undefined>)[name];
}
