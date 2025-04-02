export const _template = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
export const _walks = /* get, over(1), get, over(1), get, over(1), get, over(1), replace, over(1) */" b b b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _child, _write as _child_input_write, _name as _child_input_name, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
const _write$if_content3 = /* @__PURE__ */_$.dynamicClosureRead("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._._);
const _setup$if_content3 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Inner");
};
const _if_content3 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$if_content3, 0, _scope => _write$if_content3(_scope));
const _if$if_content = /* @__PURE__ */_$.conditional("#text/1", _if_content3);
const _write$if_content2 = /* @__PURE__ */_$.dynamicClosureRead("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._);
const _showInner$if_content = /* @__PURE__ */_$.dynamicClosureRead("showInner", (_scope, showInner) => _if$if_content(_scope, showInner ? 0 : 1), _scope => _scope._._);
const _setup$if_content2 = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Middle");
};
const _if_content2 = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$if_content2, 0, _scope => {
  _showInner$if_content(_scope);
  _write$if_content2(_scope);
});
const _if$if_content2 = /* @__PURE__ */_$.conditional("#text/1", _if_content2);
const _write$if_content = /* @__PURE__ */_$.conditionalClosure("write", "#text/4", 0, (_scope, write) => _child_input_write(_scope["#childScope/0"], write));
const _showMiddle$if_content = /* @__PURE__ */_$.conditionalClosure("showMiddle", "#text/4", 0, (_scope, showMiddle) => _if$if_content2(_scope, showMiddle ? 0 : 1));
const _setup$if_content = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input_name(_scope["#childScope/0"], "Outer");
};
const _if_content = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$if_content, 0, _scope => {
  _showMiddle$if_content._(_scope);
  _write$if_content._(_scope);
});
const _if = /* @__PURE__ */_$.conditional("#text/4", _if_content);
const _write = /* @__PURE__ */_$.value("write");
const _showInner_closure = /* @__PURE__ */_$.dynamicClosure(_showInner$if_content);
const _showInner_effect = _$.effect("__tests__/template.marko_0_showInner", (_scope, {
  showInner
}) => _$.on(_scope["#button/2"], "click", function () {
  _showInner(_scope, !showInner);
}));
const _showInner = /* @__PURE__ */_$.state("showInner/7", _scope => {
  _showInner_closure(_scope);
  _showInner_effect(_scope);
});
const _showMiddle_effect = _$.effect("__tests__/template.marko_0_showMiddle", (_scope, {
  showMiddle
}) => _$.on(_scope["#button/1"], "click", function () {
  _showMiddle(_scope, !showMiddle);
}));
const _showMiddle = /* @__PURE__ */_$.state("showMiddle/6", _scope => {
  _showMiddle$if_content(_scope);
  _showMiddle_effect(_scope);
});
const _showOuter_effect = _$.effect("__tests__/template.marko_0_showOuter", (_scope, {
  showOuter
}) => _$.on(_scope["#button/0"], "click", function () {
  _showOuter(_scope, !showOuter);
}));
const _showOuter = /* @__PURE__ */_$.state("showOuter/5", (_scope, showOuter) => {
  _if(_scope, showOuter ? 0 : 1);
  _showOuter_effect(_scope);
});
export function _setup(_scope) {
  _showOuter(_scope, true);
  _showMiddle(_scope, true);
  _showInner(_scope, true);
  _write(_scope, _write2(_scope));
}
function _write2(_scope) {
  return function (msg) {
    _scope["#pre/3"].innerHTML += '\n' + msg;
  };
}
_$.register("__tests__/template.marko_0/write", _write2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);