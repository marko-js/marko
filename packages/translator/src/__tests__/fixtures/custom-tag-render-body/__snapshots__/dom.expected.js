import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";

function _apply(_scope) {
  _child(_scope[0]);
}

import { createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `${_child_template}`;
export const walks =
/* beginChild(0), _child_walks, endChild */
`/${_child_walks}&`;
export const apply = _apply;

const _temp = _createRenderer("This is the body content", "", null);

export default _createRenderFn(template, walks, apply);