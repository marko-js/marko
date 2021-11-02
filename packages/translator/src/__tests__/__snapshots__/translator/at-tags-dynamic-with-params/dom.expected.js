let _item;

if (input.x) _item = {};
import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _hello, template as _helloTemplate, walks as _helloWalks } from "./components/hello/index.marko";
export const template = _helloTemplate;
export const walks = `$${_helloWalks}`;
export const hydrate = _register("D8IPQ0Df", input => {
  _text(y);

  _hello({
    item: _item
  });
});
export default _createRenderFn(template, walks, ["x"], hydrate);