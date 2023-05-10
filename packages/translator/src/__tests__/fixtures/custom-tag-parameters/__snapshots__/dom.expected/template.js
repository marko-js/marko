import { data as _data, bindRenderer as _bindRenderer, inChild as _inChild, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, attrs as _customTag_attrs, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _count$customTagBody = "SIGNAL NOT INITIALIZED";
const _customTagBody = /* @__PURE__ */_createRenderer("<div>Count: <!></div>", /* next(1), over(1), replace */"Db%");
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
  _customTag_attrs(_scope["#childScope/0"], {
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _customTagBody)
  });
};
export const template = `${_customTag_template}`;
export const walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/template.marko");