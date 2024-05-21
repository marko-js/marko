import { _setup_ as _hello, _input_ as _hello_input, _template_ as _hello_template, _walks_ as _hello_walks } from "./hello.marko";
import { inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup = _scope => {
  _hello(_scope["#childScope/0"]);
  _hello_input(_scope["#childScope/0"], {
    name: "Frank"
  });
};
export const _template_ = `${_hello_template}`;
export const _walks_ = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-template/template.marko");