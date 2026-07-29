import { UNPROVABLE } from "../common/patch-frame";
import type {
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { _template, type ServerRenderer, startRender } from "./template";
import { State } from "./writer";

/**
 * Renders new server input for a document the browser already holds. The result
 * is newline-delimited frames of scope fills; the markup is discarded, since
 * matched structure is already live.
 */
/**
 * A persisted template also exposes its patch renderer, so a framework can
 * negotiate one without reaching for the runtime. Ordinary builds call
 * `_template` and never retain any of this.
 */
export function _template_persisted(
  templateId: string,
  renderer: ServerRenderer,
  page?: 1,
) {
  const template = _template(templateId, renderer, page) as Template & {
    renderPatch(input?: TemplateInput): RenderedTemplate;
  };
  // Captures the template rather than using `this`, so a caller may pull the
  // method off the object.
  template.renderPatch = (input) =>
    renderPatch(template as unknown as Template & ServerRenderer, input);
  return template;
}

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
