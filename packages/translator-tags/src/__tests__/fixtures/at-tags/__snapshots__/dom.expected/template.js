export const _template_ = `<!>${_hello_template}<!>`;
export const _walks_ = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import { _setup_ as _hello, _input_ as _hello_input, _template_ as _hello_template, _walks_ as _hello_walks } from "./components/hello/index.marko";
import { inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, register as _register, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _fooBody = _register("packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko_2_renderer", /* @__PURE__ */_createRendererWithOwner("Foo!", ""));
const _helloBody = _register("packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("", ""));
export function _setup_(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input(_scope["#childScope/0"], {
    foo: {
      renderBody: _fooBody(_scope)
    },
    renderBody: _helloBody(_scope)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/at-tags/template.marko");