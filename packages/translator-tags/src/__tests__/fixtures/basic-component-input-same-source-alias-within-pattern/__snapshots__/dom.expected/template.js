export const _template_ = `${_myButton_template}`;
export const _walks_ = /* beginChild, _myButton_walks, endChild */`/${_myButton_walks}&`;
import { register as _register, inChild as _inChild, queueSource as _queueSource, intersections as _intersections, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick", _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
});
import { _setup_ as _myButton, _pattern__ as _myButton__pattern__, _onClick_ as _myButton__onClick_, _template_ as _myButton_template, _walks_ as _myButton_walks } from "./components/my-button.marko";
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _myButton__pattern__(_scope["#childScope/0"], {
    text: clickCount
  });
  _myButton__onClick_(_scope["#childScope/0"], _onClick(_scope));
}, _intersections([_inChild("#childScope/0", _myButton__pattern__), _inChild("#childScope/0", _myButton__onClick_)]));
export function _setup_(_scope) {
  _myButton(_scope["#childScope/0"]);
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko");