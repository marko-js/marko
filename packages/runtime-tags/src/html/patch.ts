import type {
  RenderedTemplate,
  Template,
  TemplateInput,
} from "../common/types";
import { _template, type ServerRenderer, startRender } from "./template";
import { State } from "./writer";

export function _template_persisted(
  templateId: string,
  renderer: ServerRenderer,
  page?: 1,
) {
  const template = _template(templateId, renderer, page);
  template.renderPatch = renderPatch;
  return template;
}

export function renderPatch(
  this: Template & ServerRenderer,
  input: TemplateInput = {},
): RenderedTemplate {
  return startRender(this, input, PatchState);
}

class PatchState extends State {
  constructor($global: State["$global"]) {
    super($global);
    this.hasMainRuntime = true;
    this.serializeReason = 1;
  }

  override flushChunk(_html: string, scripts: string) {
    return scripts ? scripts + "\n" : "";
  }

  override walkScript() {
    return "";
  }

  // A frame only ever applies to the render that produced the page: one
  // flat entry array (number = scope id, object = partial, string = effects).
  override resumeScript(resumes: string) {
    return "[" + resumes + "]";
  }

  override get writesPatches() {
    return true;
  }
}
