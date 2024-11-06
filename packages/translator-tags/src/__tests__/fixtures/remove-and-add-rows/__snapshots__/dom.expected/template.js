export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child$forBody = /* @__PURE__ */_$.value("child", (_scope, child) => _$.data(_scope["#text/0"], child.text));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _child$forBody(_scope, _params_2[0]));
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#div/0", _forBody);
export const _children_ = /* @__PURE__ */_$.value("children", (_scope, children) => _for(_scope, [children, function (c) {
  return c.id;
}]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _children_(_scope, input.children));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/remove-and-add-rows/template.marko");