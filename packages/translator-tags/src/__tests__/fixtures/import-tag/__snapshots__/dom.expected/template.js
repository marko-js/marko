export const _template_ = `<!>${_bazComp_template}${_bazComp_template}${_bazComp_template}<!>`;
export const _walks_ = /* beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild, replace, over(1) */`D/${_bazComp_walks}&/${_bazComp_walks}&/${_bazComp_walks}&%b`;
import "./foo";
import { b as c } from "./bar";
import bazComp from "./components/baz.marko";
import { _setup_ as _bazComp, _template_ as _bazComp_template, _walks_ as _bazComp_walks } from "./components/baz.marko";
import { data as _data, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _bazComp(_scope["#childScope/0"]);
  _bazComp(_scope["#childScope/1"]);
  _bazComp(_scope["#childScope/2"]);
  _data(_scope["#text/3"], c);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko");