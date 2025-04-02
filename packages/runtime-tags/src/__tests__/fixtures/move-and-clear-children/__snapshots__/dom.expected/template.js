export const _template = "<div></div>";
export const _walks = /* get, over(1) */" b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child_text$for_content = /* @__PURE__ */_$.value("child_text", (_scope, child_text) => _$.data(_scope["#text/0"], child_text));
const _child$for_content = /* @__PURE__ */_$.value("child", (_scope, child) => _child_text$for_content(_scope, child?.text));
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _child$for_content(_scope, _params2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#div/0", _for_content);
export const _children = /* @__PURE__ */_$.value("children", (_scope, children) => _for(_scope, [children, function (c) {
  return c.id;
}]));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _children(_scope, input.children));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);