import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, setSource as _setSource, dynamicSubscribers as _dynamicSubscribers, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, source as _source, notifySignal as _notifySignal, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _layout, attrs as _layout_attrs, template as _layout_template, walks as _layout_walks } from "./components/layout.marko";
const _layout_attrs_inChild = _inChild(_layout_attrs, 1);
const _name$layoutBody = _dynamicClosure(1, 0, [], (_scope, name) => _data(_scope[0], name));
const _layoutBody = /* @__PURE__ */_createRenderer("<h1>Hello <!></h1>", /* next(1), over(1), replace */"Db%", null, [_name$layoutBody]);
const _name = /* @__PURE__ */_source(0, [_dynamicSubscribers(0)]);
const _setup = _scope => {
  _layout(_scope[1]);
  _setSource(_scope[1], _layout_attrs, {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _layoutBody)
  });
  _notifySignal(_scope, _layout_attrs_inChild);
};
export const attrs = /* @__PURE__ */_destructureSources([_name], (_scope, {
  name
}) => {
  _setSource(_scope, _name, name);
});
export { _name as _apply_name };
export const template = `${_layout_template}`;
export const walks = /* beginChild(1), _layout_walks, endChild */`0${_layout_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);