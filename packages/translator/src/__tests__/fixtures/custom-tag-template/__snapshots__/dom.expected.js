import { setup as _hello, attrs as _hello_attrs, template as _hello_template, walks as _hello_walks } from "./hello.marko";
import { setSource as _setSource, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _setup = _scope => {
  _hello(_scope[0]);

  _setSource(_scope[0], _hello_attrs, {
    name: "Frank"
  });

  _notifySignal(_scope, _hello_attrs);
};

export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);