import { queueSource as _queueSource, inChild as _inChild, register as _register, values as _values, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _myButton, _text_ as _myButton__text_, _onClick_ as _myButton__onClick_, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _myButton__text_(_scope["#childScope/0"], clickCount);
  _myButton__onClick_(_scope["#childScope/0"], _onClick(_scope));
}, void 0, _values([_inChild("#childScope/0", _myButton__text_), _inChild("#childScope/0", _myButton__onClick_)]));
const _setup = _scope => {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
};
export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko");