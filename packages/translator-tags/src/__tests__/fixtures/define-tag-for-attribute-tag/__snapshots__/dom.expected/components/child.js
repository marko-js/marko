export const _template_ = "<div><!></div>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import { classAttr as _classAttr, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _classAttr(_scope["#div/0"], {
    "selected": input.thing.selected
  });
  _dynamicTagName(_scope, input.thing.renderBody);
}, _dynamicTagName);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), _input_);
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/define-tag-for-attribute-tag/components/child.marko");