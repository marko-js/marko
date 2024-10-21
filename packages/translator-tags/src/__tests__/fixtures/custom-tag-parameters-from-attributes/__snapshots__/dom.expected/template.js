export const _template_ = `${_customTag_template}<!>`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import { data as _data, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, value as _value, register as _register, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_ as _customTag_input, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _name$customTagBody = /* @__PURE__ */_value("name", (_scope, name) => _data(_scope["#text/0"], name));
const _count$customTagBody = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/1"], count));
const _pattern_$customTagBody = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => {
  _count$customTagBody(_scope, _pattern_.count);
  _name$customTagBody(_scope, _pattern_.name);
});
const _params_2$customTagBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _pattern_$customTagBody(_scope, _params_2[0]));
const _customTagBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", void 0, void 0, void 0, () => _params_2$customTagBody));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
  _customTag_input(_scope["#childScope/0"], {
    name: "hello",
    renderBody: _customTagBody(_scope)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko");