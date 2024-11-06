export const _template_ = `<!>${_Baz_template}${_Baz_template}${_Baz_template}<!>`;
export const _walks_ = /* beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, replace, over(1) */`D/${_Baz_walks}&/${_Baz_walks}&/${_Baz_walks}&%b`;
import "./foo";
import { b as c } from "./bar";
import Baz from "./components/baz.marko";
import { _setup_ as _Baz, _template_ as _Baz_template, _walks_ as _Baz_walks } from "./components/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _Baz(_scope["#childScope/0"]);
  _Baz(_scope["#childScope/1"]);
  _Baz(_scope["#childScope/2"]);
  _$.data(_scope["#text/3"], c);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/import-tag/template.marko", _template_, _walks_, _setup_);