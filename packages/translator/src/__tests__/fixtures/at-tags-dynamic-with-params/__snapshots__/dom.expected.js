let _item;

const _if = _createRenderer("", "%", _apply);

_hello({
  item: _item
});

import { data as _data, write as _write, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _data(0, y);
}

function _apply_x(x) {
  if (_write(0, x)) _setConditionalRenderer(0, x ? _if : null);
}

import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply;
export default _createRenderFn(template, walks, apply);