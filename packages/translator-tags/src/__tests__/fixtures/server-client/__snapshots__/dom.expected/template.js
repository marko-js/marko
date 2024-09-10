export const _template_ = "<div><span> </span></div>";
export const _walks_ = /* next(2), get, out(2) */"E m";
const client_x = 2;
const x = typeof server_x === "undefined" ? client_x : server_x;
import { data as _data, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _data(_scope["#text/0"], x);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/server-client/template.marko");