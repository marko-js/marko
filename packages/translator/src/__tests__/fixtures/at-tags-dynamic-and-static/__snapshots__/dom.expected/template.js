import { setup as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
import { bindRenderer as _bindRenderer, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _forBody = /* @__PURE__ */_createRenderer("", "");
const _helloBody = /* @__PURE__ */_createRenderer("", "");
const _setup = _scope => {
  _hello(_scope["#childScope/0"]);
};
export const template = `${_hello_template}`;
export const walks = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-and-static/template.marko");