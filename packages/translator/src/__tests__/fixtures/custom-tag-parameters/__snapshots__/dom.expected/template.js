import { data as _data, bindRenderer as _bindRenderer, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";
const _c$customTagBody = "SIGNAL NOT INITIALIZED";
const _b$customTagBody = "SIGNAL NOT INITIALIZED";
const _a$customTagBody = "SIGNAL NOT INITIALIZED";
const _customTagBody = /* @__PURE__ */_createRenderer("<div><!> <!> <!></div>", /* next(1), replace, over(2), replace, over(2), replace */"D%c%c%");
const _setup = _scope => {
  _customTag(_scope["#childScope/0"]);
};
export const template = `${_customTag_template}`;
export const walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/template.marko");