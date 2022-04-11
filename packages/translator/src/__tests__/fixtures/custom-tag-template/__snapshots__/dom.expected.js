import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./hello.marko";

function _apply(_scope) {
  _hello(_scope[0]);
}

export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const apply = _apply;
import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export default _createRenderFn(template, walks, apply);