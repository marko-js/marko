import { setup as _hello, args as _hello_args, template as _hello_template, walks as _hello_walks } from "./hello.marko";
import { inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _setup = _scope => {
  _hello(_scope["#childScope/0"]);
  _hello_args(_scope["#childScope/0"], [{
    name: "Frank"
  }]);
};
export const template = `${_hello_template}`;
export const walks = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/custom-tag-template/template.marko");