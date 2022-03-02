import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

function _apply() {
  _hello();
}

import { createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = _createRenderer("", "", null),
      _temp2 = _createRenderer("", "", null);

export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);