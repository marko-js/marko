export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child_text$for_content = /* @__PURE__ */_$.value("child_text/3", (_scope, child_text) => _$.data(_scope["#text/0"], child_text));
const _child$for_content = /* @__PURE__ */_$.value("child/2", (_scope, child) => _child_text$for_content(_scope, child?.text));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2/1", (_scope, _params_2) => _child$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#div/0", _for_content);
export const _children_ = /* @__PURE__ */_$.value("children/3", (_scope, children) => _for(_scope, [children, function (c) {
  return c.id;
}]));
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => _children_(_scope, input.children));
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);