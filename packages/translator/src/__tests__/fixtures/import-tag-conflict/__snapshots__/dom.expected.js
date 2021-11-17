import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<!> <!>";
export const walks = "%c%b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/import-tag-conflict/template.marko", input => {
  _data(asset1);

  _data(asset2);
});
export default _createRenderFn(template, walks, [], hydrate);