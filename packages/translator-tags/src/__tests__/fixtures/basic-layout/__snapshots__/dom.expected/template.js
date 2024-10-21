export const _template_ = `${_layout_template}`;
export const _walks_ = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
import { data as _data, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, register as _register, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _layout, _renderBody_ as _layout_renderBody, _template_ as _layout_template, _walks_ as _layout_walks } from "./components/layout.marko";
const _name$layoutBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_name/subscriber", /* @__PURE__ */_dynamicClosure("name", (_scope, name) => _data(_scope["#text/0"], name)));
const _layoutBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", void 0, () => [_name$layoutBody]));
export const _name_ = /* @__PURE__ */_value("name", null, () => _dynamicSubscribers("name"));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _name_(_scope, input.name), () => _name_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _layout(_scope["#childScope/0"]);
  _layout_renderBody(_scope["#childScope/0"], _layoutBody(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");