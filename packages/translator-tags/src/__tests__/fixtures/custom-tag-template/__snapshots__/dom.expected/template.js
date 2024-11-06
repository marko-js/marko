export const _template_ = `${_hello_template}`;
export const _walks_ = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
import { _setup_ as _hello, _input_ as _hello_input, _template_ as _hello_template, _walks_ as _hello_walks } from "./hello.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input(_scope["#childScope/0"], {
    name: "Frank"
  });
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-template/template.marko", _template_, _walks_, _setup_);