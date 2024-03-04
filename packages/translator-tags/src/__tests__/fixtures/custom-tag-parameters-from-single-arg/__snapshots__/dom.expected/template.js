import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, value as _value, createRenderer as _createRenderer, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _customTag, args as _customTag_args, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _count$customTagBody = /* @__PURE__ */_value("count", (_scope, count) => _data(_scope["#text/0"], count));
const _customTagBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko_1_renderer", /* @__PURE__ */_createRenderer("<div>Count: <!></div>", /* next(1), over(1), replace */"Db%", void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let count;
  if (!_clean) [count] = _destructure;
  _count$customTagBody(_scope, count, _clean);
}));
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
  _customTag_args(_scope["#childScope/0"], [{
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _customTagBody)
  }]);
};
export const template = `${_customTag_template}<!>`;
export const walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko");