export const _template_ = `<!>${_hello_template}<!>`;
export const _walks_ = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import { bindRenderer as _bindRenderer, inChild as _inChild, createRenderer as _createRenderer, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _hello, _input_ as _hello_input, _template_ as _hello_template, _walks_ as _hello_walks } from "./components/hello/index.marko";
const _fooBody = _register("packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko_2_renderer", /* @__PURE__ */_createRenderer("Foo!", ""));
const _helloBody = _register("packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", ""));
export function _setup_(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input(_scope["#childScope/0"], {
    foo: {
      renderBody: /* @__PURE__ */_bindRenderer(_scope, _fooBody)
    },
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _helloBody)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko");