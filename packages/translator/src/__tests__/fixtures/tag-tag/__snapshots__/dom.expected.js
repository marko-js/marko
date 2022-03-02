const MyTag = input => {};

_dynamicTag(MyTag, {
  name: "World"
});

import { data as _data, dynamicTag as _dynamicTag, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_input(input) {
  if (_write(1, input)) _data(0, input.name);
}

const _temp = _createRenderer("Hello <!>", "b%", null);

export const template = "";
export const walks = "";
export const apply = null;
export default _createRenderFn(template, walks, apply);