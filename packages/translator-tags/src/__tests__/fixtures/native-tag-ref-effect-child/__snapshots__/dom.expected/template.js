import { bindFunction as _bindFunction, inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const el_getter = _scope => _scope["#div/0"];
import { setup as _helloSetter, args as _helloSetter_args, template as _helloSetter_template, walks as _helloSetter_walks } from "./components/hello-setter.marko";
const _setup = _scope => {
  _helloSetter(_scope["#childScope/1"]);
  _helloSetter_args(_scope["#childScope/1"], [{
    el: /* @__PURE__ */_bindFunction(_scope, el_getter)
  }]);
};
export const template = `<div></div>${_helloSetter_template}`;
export const walks = /* get, over(1), beginChild, _helloSetter_walks, endChild */` b/${_helloSetter_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");