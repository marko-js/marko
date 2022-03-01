import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";

function _apply_c(c) {
  if (_write(5, c)) _data(2, c);
}

function _apply_b(b) {
  if (_write(4, b)) _data(1, b);
}

function _apply_a(a) {
  if (_write(3, a)) _data(0, a);
}

function _apply() {
  _customTag();
}

export const template = `${_customTag_template}`;
export const walks = `${_customTag_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);