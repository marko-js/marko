import { queueSource as _queueSource, register as _register, bindFunction as _bindFunction, inChild as _inChild, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { setup as _myButton, args as _myButton_args, template as _myButton_template, walks as _myButton_walks } from "./components/my-button.marko";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/template.marko_0/onClick", function (_scope) {
  const {
    clickCount
  } = _scope;
  _queueSource(_scope, _clickCount, clickCount + 1);
});
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => _myButton_args(_scope["#childScope/0"], [{
  text: clickCount,
  onClick: /* @__PURE__ */_bindFunction(_scope, _onClick)
}]), void 0, _inChild("#childScope/0", _myButton_args));
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
};
export const template = `${_myButton_template}`;
export const walks = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/template.marko");