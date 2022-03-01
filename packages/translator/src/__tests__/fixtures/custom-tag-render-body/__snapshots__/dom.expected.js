import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";

function _apply() {
  _child();
}

import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_child_template}`;
export const walks = `${_child_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);