import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _setup = _scope => {
  _data(_scope["#text/0"], asset1);
  _data(_scope["#text/1"], asset2);
};
export const template = "<!> <!>";
export const walks = /* replace, over(2), replace, over(1) */"%c%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/import-tag-conflict/template.marko");