export const _template_ = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), get, over(1), replace, over(1) */" b b b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _write = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0/write", _scope => function (msg) {
  _scope["#pre/3"].innerHTML += '\n' + msg;
});
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _write$ifBody3 = /* @__PURE__ */_$.dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._._, () => _$.inChild("#childScope/0", _child_input_write));
const _setup$ifBody3 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Inner");
};
const _ifBody3 = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_3_renderer", /* @__PURE__ */_$.createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$ifBody3, () => [_write$ifBody3]));
const _if$ifBody = /* @__PURE__ */_$.conditional("#text/1", 0);
const _write$ifBody2 = /* @__PURE__ */_$.dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._, () => _$.inChild("#childScope/0", _child_input_write));
const _showInner$ifBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_2_showInner/subscriber", /* @__PURE__ */_$.dynamicClosure("showInner", (_scope, showInner) => _if$ifBody(_scope, showInner ? _ifBody3 : null), _scope => _scope._._, () => _if$ifBody));
const _setup$ifBody2 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Middle");
};
const _ifBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$ifBody2, () => [_write$ifBody2, _showInner$ifBody]));
const _if$ifBody2 = /* @__PURE__ */_$.conditional("#text/1", 0);
const _write$ifBody = /* @__PURE__ */_$.closure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), void 0, () => _$.inChild("#childScope/0", _child_input_write));
const _showMiddle$ifBody = /* @__PURE__ */_$.closure("showMiddle", (_scope, showMiddle) => _if$ifBody2(_scope, showMiddle ? _ifBody2 : null), void 0, () => _if$ifBody2);
const _setup$ifBody = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Outer");
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$ifBody, () => [_write$ifBody, _showMiddle$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/4", 0);
const _write2 = /* @__PURE__ */_$.value("write", 0, () => _$.intersections([_$.inConditionalScope(_write$ifBody, "#text/4"), _$.dynamicSubscribers("write")]));
const _onClick = _scope => {
  const {
    showInner
  } = _scope;
  return function () {
    _showInner(_scope, !showInner);
  };
};
const _showInner_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showInner", _scope => _$.on(_scope["#button/2"], "click", _onClick(_scope)));
const _showInner = /* @__PURE__ */_$.state("showInner", (_scope, showInner) => _showInner_effect(_scope), () => _$.dynamicSubscribers("showInner"));
const _onClick2 = _scope => {
  const {
    showMiddle
  } = _scope;
  return function () {
    _showMiddle(_scope, !showMiddle);
  };
};
const _showMiddle_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showMiddle", _scope => _$.on(_scope["#button/1"], "click", _onClick2(_scope)));
const _showMiddle = /* @__PURE__ */_$.state("showMiddle", (_scope, showMiddle) => _showMiddle_effect(_scope), () => _$.inConditionalScope(_showMiddle$ifBody, "#text/4"));
const _onClick3 = _scope => {
  const {
    showOuter
  } = _scope;
  return function () {
    _showOuter(_scope, !showOuter);
  };
};
const _showOuter_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showOuter", _scope => _$.on(_scope["#button/0"], "click", _onClick3(_scope)));
const _showOuter = /* @__PURE__ */_$.state("showOuter", (_scope, showOuter) => {
  _showOuter_effect(_scope);
  _if(_scope, showOuter ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _showOuter(_scope, true);
  _showMiddle(_scope, true);
  _showInner(_scope, true);
  _write2(_scope, _write(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko", _template_, _walks_, _setup_);