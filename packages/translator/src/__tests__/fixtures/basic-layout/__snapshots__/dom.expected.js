import { data as _data, closure as _closure, createRenderer as _createRenderer, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _layout, attrs as _layout_attrs, template as _layout_template, walks as _layout_walks } from "./components/layout.marko";

const _name$layoutBody = /* @__PURE__ */_closure(1, 1, [], (_scope, name) => _data(_scope[0], name));

const _layoutBody = /* @__PURE__ */_createRenderer("<h1>Hello <!></h1>",
/* next(1), over(1), replace */
"Db%", null, [_name$layoutBody]);

const _name = /* @__PURE__ */_source(1, []);

const _setup = _scope => {
  _layout(_scope[0]);
};

export const attrs = /* @__PURE__ */_destructureSources([_name], (_scope, {
  name
}) => {
  _setSource(_scope, _name, name);
});
export { _name as _apply_name };
export const template = `${_layout_template}`;
export const walks =
/* beginChild(0), _layout_walks, endChild */
`/${_layout_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);