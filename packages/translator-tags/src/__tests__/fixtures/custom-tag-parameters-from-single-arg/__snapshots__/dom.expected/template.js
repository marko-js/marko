export const _template_ = `${_customTag_template}<!>`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, createRenderer as _createRenderer, value as _value, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_ as _customTag_input, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _count$customTagBody = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/0"], count));
const _params_2$customTagBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _count$customTagBody(_scope, _params_2[0]));
const _customTagBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div>Count: <!></div>", /* next(1), over(1), replace */"Db%", void 0, void 0, void 0, _params_2$customTagBody));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
  _customTag_input(_scope["#childScope/0"], {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _customTagBody)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko");