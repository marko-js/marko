import customTag from './components/custom-tag.marko';
const tags = [customTag];
import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _tags0_input = _dynamicTagAttrs("#text/2");
const _expr_dynamicTagName_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/2": dynamicTagName,
    x
  } = _scope;
  _tags0_input(_scope, () => x);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", null, _expr_dynamicTagName_x);
const _y = "SIGNAL NOT INITIALIZED";
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko_0_x", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _queueEffect(_scope, _x_effect);
}, _expr_dynamicTagName_x);
const _setup = _scope => {
  _x(_scope, 1);
  _dynamicTagName(_scope, tags[0]);
};
export const template = "<button>Count: <!></button><!><div>Parent: <!></div>";
export const walks = /* get, next(1), over(1), replace, out(1), replace, over(1), next(1), over(1), replace, out(1) */" Db%l%bDb%l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko");