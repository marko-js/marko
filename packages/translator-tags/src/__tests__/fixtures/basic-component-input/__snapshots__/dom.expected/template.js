export const _template_ = `${_myButton._template_}`;
export const _walks_ = /* beginChild, , endChild */`/${_myButton._walks_}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-component-input/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _clickCount(clickCount + 1, _scope);
  };
});
import * as _myButton from "./components/my-button.marko";
const _clickCount = /* @__PURE__ */_$.state("clickCount", clickCount => {
  _myButton._text_(clickCount, "#childScope/0");
  _myButton._onClick_(_onClick(_scope), "#childScope/0");
}, () => _$.intersections([_$.inChild("#childScope/0", _myButton._text_), _$.inChild("#childScope/0", _myButton._onClick_)]));
export const _setup_ = _$.setup(_scope => {
  _myButton._setup_("#childScope/0");
  _clickCount(0);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input/template.marko", _template_, _walks_, _setup_);