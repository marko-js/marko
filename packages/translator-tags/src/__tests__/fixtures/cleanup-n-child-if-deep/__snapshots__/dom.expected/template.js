export const _template_ = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), get, over(1), replace, over(1) */" b b b b%bD";
import { on as _on, register as _register, inChild as _inChild, queueSource as _queueSource, createRenderer as _createRenderer, dynamicClosure as _dynamicClosure, conditional as _conditional, registerSubscriber as _registerSubscriber, closure as _closure, inConditionalScope as _inConditionalScope, dynamicSubscribers as _dynamicSubscribers, intersections as _intersections, value as _value, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _write = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0/write", _scope => function (msg) {
  _scope["#pre/3"].innerHTML += '\n' + msg;
});
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _write$ifBody3 = /* @__PURE__ */_dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._._, () => _inChild("#childScope/0", _child_input_write));
const _setup$ifBody3 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Inner");
};
const _ifBody3 = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_3_renderer", /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$ifBody3, () => [_write$ifBody3]));
const _if$ifBody = /* @__PURE__ */_conditional("#text/1");
const _write$ifBody2 = /* @__PURE__ */_dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._, () => _inChild("#childScope/0", _child_input_write));
const _showInner$ifBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_2_showInner/subscriber", /* @__PURE__ */_dynamicClosure("showInner", (_scope, showInner) => _if$ifBody(_scope, showInner ? _ifBody3 : null), _scope => _scope._._, () => _if$ifBody));
const _setup$ifBody2 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Middle");
};
const _ifBody2 = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_2_renderer", /* @__PURE__ */_createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$ifBody2, () => [_write$ifBody2, _showInner$ifBody]));
const _if$ifBody2 = /* @__PURE__ */_conditional("#text/1");
const _write$ifBody = /* @__PURE__ */_closure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), void 0, () => _inChild("#childScope/0", _child_input_write));
const _showMiddle$ifBody = /* @__PURE__ */_closure("showMiddle", (_scope, showMiddle) => _if$ifBody2(_scope, showMiddle ? _ifBody2 : null), void 0, () => _if$ifBody2);
const _setup$ifBody = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Outer");
};
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_1_renderer", /* @__PURE__ */_createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$ifBody, () => [_write$ifBody, _showMiddle$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/4");
const _write2 = /* @__PURE__ */_value("write", null, () => _intersections([_inConditionalScope(_write$ifBody, "#text/4"), _dynamicSubscribers("write")]));
const _onClick = _scope => {
  const {
    showInner
  } = _scope;
  return function () {
    _queueSource(_scope, _showInner, !showInner);
  };
};
const _showInner_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showInner", _scope => _on(_scope["#button/2"], "click", _onClick(_scope)));
const _showInner = /* @__PURE__ */_value("showInner", (_scope, showInner) => _queueEffect(_scope, _showInner_effect), () => _dynamicSubscribers("showInner"));
const _onClick2 = _scope => {
  const {
    showMiddle
  } = _scope;
  return function () {
    _queueSource(_scope, _showMiddle, !showMiddle);
  };
};
const _showMiddle_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showMiddle", _scope => _on(_scope["#button/1"], "click", _onClick2(_scope)));
const _showMiddle = /* @__PURE__ */_value("showMiddle", (_scope, showMiddle) => _queueEffect(_scope, _showMiddle_effect), () => _inConditionalScope(_showMiddle$ifBody, "#text/4"));
const _onClick3 = _scope => {
  const {
    showOuter
  } = _scope;
  return function () {
    _queueSource(_scope, _showOuter, !showOuter);
  };
};
const _showOuter_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko_0_showOuter", _scope => _on(_scope["#button/0"], "click", _onClick3(_scope)));
const _showOuter = /* @__PURE__ */_value("showOuter", (_scope, showOuter) => {
  _queueEffect(_scope, _showOuter_effect);
  _if(_scope, showOuter ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _showOuter(_scope, true);
  _showMiddle(_scope, true);
  _showInner(_scope, true);
  _write2(_scope, _write(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-if-deep/template.marko");