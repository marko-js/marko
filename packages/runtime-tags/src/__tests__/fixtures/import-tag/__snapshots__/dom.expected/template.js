export const _template = `<!>${_Baz_template}${_Baz_template}${_Baz_template}<!>`;
export const _walks = /* beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, replace, over(1) */`D/${_Baz_walks}&/${_Baz_walks}&/${_Baz_walks}&%b`;
import "./foo";
import { b as c } from "./bar";
import Baz from "./tags/baz.marko";
import { _setup as _Baz, _template as _Baz_template, _walks as _Baz_walks } from "./tags/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup(_scope) {
  _Baz(_scope["#childScope/0"]);
  _Baz(_scope["#childScope/1"]);
  _Baz(_scope["#childScope/2"]);
  _$.data(_scope["#text/3"], c);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);