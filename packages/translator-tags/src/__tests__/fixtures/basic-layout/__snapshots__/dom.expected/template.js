import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, register as _register, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _layout, _args_ as _layout_args, _template_ as _layout_template, _walks_ as _layout_walks } from "./components/layout.marko";
const _name$layoutBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_name/subscriber", /* @__PURE__ */_dynamicClosure("name", (_scope, name) => _data(_scope["#text/0"], name)));
const _layoutBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", void 0, [_name$layoutBody]));
const _name = /* @__PURE__ */_value("name", null, _dynamicSubscribers("name"));
const _destructure2 = (_scope, _destructure, _clean) => {
  let name;
  if (!_clean) ({
    name
  } = _destructure);
  _name(_scope, name, _clean);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
const _setup = _scope => {
  _layout(_scope["#childScope/0"]);
  _layout_args(_scope["#childScope/0"], [{
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _layoutBody)
  }]);
};
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = `${_layout_template}`;
export const _walks_ = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");