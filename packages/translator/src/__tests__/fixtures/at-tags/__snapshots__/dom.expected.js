import { write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

const _helloBody = _createRenderer("", "");

const _setup = _scope => {
  _hello(_scope[0]);
};

export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const setup = _setup;
export default _createRenderFn(template, walks, setup);