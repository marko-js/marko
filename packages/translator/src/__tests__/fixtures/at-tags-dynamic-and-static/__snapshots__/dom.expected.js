import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

function _apply(_scope) {
  _hello(_scope[0]);
}

import { createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const apply = _apply;

const _temp = _createRenderer("", "", null),
      _temp2 = _createRenderer("", "", null);

export default _createRenderFn(template, walks, apply);