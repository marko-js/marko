export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child_text$for_content = /* @__PURE__ */_$.value("child_text", (_scope, child_text) => _$.data(_scope["#text/0"], child_text));
const _child$for_content = /* @__PURE__ */_$.value("child", (_scope, child) => _child_text$for_content(_scope, child?.text));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _child$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
export const _input_children_ = /* @__PURE__ */_$.value("input_children", (_scope, input_children) => _for(_scope, [input_children, function (c) {
  return c.id;
}]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_children_(_scope, input.children));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);