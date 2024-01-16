import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
import { setup as _layout, attrs as _layout_attrs, template as _layout_template, walks as _layout_walks } from "./components/layout.marko";
const _name$layoutBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko_1_name/subscriber", /* @__PURE__ */_dynamicClosure("name", (_scope, name) => _data(_scope["#text/0"], name)));
const _layoutBody = /* @__PURE__ */_createRenderer("<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", void 0, [_name$layoutBody]);
const _name = /* @__PURE__ */_value("name", null, _dynamicSubscribers("name"));
const _setup = _scope => {
  _layout(_scope["#childScope/0"]);
  _layout_attrs(_scope["#childScope/0"], {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _layoutBody)
  });
};
export const attrs = (_scope, _destructure, _clean) => {
  let name;
  if (!_clean) ({
    name
  } = _destructure);
  _name(_scope, name, _clean);
};
export { _name };
export const template = `${_layout_template}`;
export const walks = /* beginChild, _layout_walks, endChild */`/${_layout_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/basic-layout/template.marko");