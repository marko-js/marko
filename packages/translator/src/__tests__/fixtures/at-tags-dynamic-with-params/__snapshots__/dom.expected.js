let _item;

import { data as _data, write as _write, setConditionalRenderer as _setConditionalRenderer, readInOwner as _readInOwner, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

function _apply() {
  _data(0, y);
}

function _apply_x(x = _readInOwner(0)) {
  _setConditionalRenderer(0, x ? _if : null);
}

function _apply2() {
  _hello();
}

const _temp2 = _createRenderer("<!>", "%+", null),
      _if = _createRenderer("", "", null),
      _temp3 = _createRenderer("", "%", _apply);

export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply = _apply2;
export default _createRenderFn(template, walks, apply);