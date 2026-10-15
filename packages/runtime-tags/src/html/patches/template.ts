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
  patchBuild,
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
  if (MARKO_DEBUG) {
    // An embedded render (a micro-frame) has no page whose shells a token names.
    if (this[RendererProp.Embed]) {
      throw new Error(
        "Marko patches only render page templates; this template renders embedded, so request it as a document.",
      );
    }
    if (!patchBuild) {
      throw new Error(
        "Marko patches render only once the server names its build with `setPatchBuild`.",
      );
    }
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

/** A `~`-marked request's kind, `"patch"` or another build's `"stale"`; strips the marker from `url`.
 * @experimental The patch protocol may change in a minor release. */
export function patchRequest(headers: PatchHeaders, url: URL) {
  const { search } = url;
  if (!patchMarkerReg.test(search)) return;
  url.search = search.slice(0, -2);
  const value = readHeader(headers, "x-marko-patch");
  return value == null
    ? undefined
    : patchBuild && value.startsWith(patchBuild + ";")
      ? ("patch" as const)
      : ("stale" as const);
}

// The marker the router appends last to a patch request's query, which a
// cache keys on, with the separator before it.
const patchMarkerReg = /[?&]~$/;

/** Headers for a request of `kind`: an uncached patch marked with its build, or another build's 412 refusal.
 * @experimental The patch protocol may change in a minor release. */
export function patchResponseHeaders(
  kind: ReturnType<typeof patchRequest>,
): Record<string, string> {
  return kind === "patch"
    ? {
        "content-type": "text/javascript;charset=UTF-8",
        "cache-control": "no-store",
        "x-marko-patch": patchBuild!,
      }
    : kind === "stale"
      ? { "cache-control": "no-store" }
      : {};
}

function readHeader(headers: PatchHeaders, name: string) {
  return typeof headers.get === "function"
    ? headers.get(name)
    : (headers as Record<string, string | undefined>)[name];
}
