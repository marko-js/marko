import { setup as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _data2 = "SIGNAL NOT INITIALIZED";

const _setup = _scope => {
  _child(_scope[2]);
};

export const template = `${_child_template}<!>`;
export const walks =
/* beginChild(2), _child_walks, endChild, replace, over(1) */
`1${_child_walks}&%b`;
export const setup = _setup;
export default _createRenderFn(template, walks, setup);