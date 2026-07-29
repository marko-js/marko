import { UNPROVABLE } from "../common/patch-frame";
import type {
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { type ServerRenderer, startRender } from "./template";
import { State } from "./writer";

/**
 * Renders new server input for a document the browser already holds. The result
 * is newline-delimited frames of scope fills; the markup is discarded, since
 * matched structure is already live.
 */
export function renderPatch(
  template: Template & ServerRenderer,
  input: TemplateInput = {},
): RenderedTemplate {
  return startRender(template, input, PatchState);
}

class PatchState extends State {
  constructor($global: State["$global"]) {
    super($global);
    // The browser holds the runtime and the adopted DOM already, so a frame
    // never carries the walker or asks for a walk.
    this.hasMainRuntime = true;
    // Every request-derived value a client signal reads has to arrive, since a
    // frame re-drives those signals rather than re-rendering the markup.
    this.serializeReason = 1;
  }

  unprovable = false;

  override flushChunk(_html: string, scripts: string) {
    if (this.unprovable) return UNPROVABLE + "\n";
    return scripts ? scripts + "\n" : "";
  }

  override walkScript() {
    return "";
  }

  override get writesPatchHoles() {
    return true;
  }

  override patchUnprovable() {
    this.unprovable = true;
  }
}
