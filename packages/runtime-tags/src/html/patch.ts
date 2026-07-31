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

// Serialize guards stay unset so the compiled resume payload drops at the
// source: a frame carries only patch fills and branch identity.
class PatchState extends State {
  constructor($global: State["$global"]) {
    super($global);
    this.hasMainRuntime = true;
  }

  // A frame only ever applies to the render that produced the page, so it
  // is one flush's resume entry array without the runtime/render prefix.
  override resumeScript(resumes: string) {
    return "[" + resumes + "]";
  }

  override flushChunk(_html: string, scripts: string) {
    return scripts ? scripts + "\n" : "";
  }

  override walkScript() {
    return "";
  }

  override get writesPatches() {
    return true;
  }
}
