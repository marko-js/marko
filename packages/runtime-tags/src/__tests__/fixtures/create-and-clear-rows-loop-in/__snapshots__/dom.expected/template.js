export const _template_ = "<div><!><!></div>";
export const _walks_ = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _key$for_content2 = /* @__PURE__ */_$.value("key", (_scope, key) => _$.data(_scope["#text/0"], key));
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _key$for_content2(_scope, _params_3[0]));
const _for_content2 = /* @__PURE__ */_$.createRenderer("<p> </p>", /* next(1), get */"D ", void 0, () => _params_3$for_content);
const _text$for_content = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/1"], text));
const _key$for_content = /* @__PURE__ */_$.value("key", (_scope, key) => _$.data(_scope["#text/0"], key));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _key$for_content(_scope, _params_2[0]);
  _text$for_content(_scope, _params_2[1]);
});
const _for_content = /* @__PURE__ */_$.createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%", void 0, () => _params_2$for_content);
const _for2 = /* @__PURE__ */_$.loopIn("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopIn("#text/0", _for_content);
export const _input_children_ = /* @__PURE__ */_$.value("input_children", (_scope, input_children) => {
  _for(_scope, [input_children]);
  _for2(_scope, [input_children]);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_children_(_scope, input.children));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);