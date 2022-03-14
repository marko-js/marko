import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_data(_scope, data) {
  if (_write(_scope, 1, data)) _data(_scope, 0, data);
}

function _apply(_scope) {
  _child();
}

export const template = `${_child_template}<!>`;
export const walks = `${_child_walks}%b`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);