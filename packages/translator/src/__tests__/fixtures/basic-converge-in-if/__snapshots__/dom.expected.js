import { data as _data, setConditionalRenderer as _setConditionalRenderer, queue as _queue, queueInBranch as _queueInBranch, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply$ifBodyWith_a_b(_scope, a = _scope._[4], b = _scope._[5]) {
  _data(_scope[0], a + b);
}

function _apply$ifBody_b(_scope, b = _scope._[5]) {
  _queue(_scope, _apply$ifBodyWith_a_b, 2);
}

function _apply$ifBody_a(_scope, a = _scope._[4]) {
  _queue(_scope, _apply$ifBodyWith_a_b, 2);
}

function _apply$ifBody(_scope) {
  _queue(_scope, _apply$ifBody_b, 1);

  _queue(_scope, _apply$ifBody_a, 0);
}

function _apply_b(_scope, b) {
  if (_write(_scope, 5, b)) {
    _queueInBranch(_scope, 0, _ifBody, _apply$ifBody_b, 2, 3);
  }
}

function _apply_a(_scope, a) {
  if (_write(_scope, 4, a)) {
    _queueInBranch(_scope, 0, _ifBody, _apply$ifBody_a, 1, 4);
  }
}

function _apply(_scope) {
  _apply_a(_scope, 0);

  _apply_b(_scope, 0);

  _setConditionalRenderer(_scope, 0, true ? _ifBody : null);
}

export const template = "<!>";
export const walks =
/* replace, skip(3), over(1) */
"%+b";
export const apply = _apply;

const _ifBody = _createRenderer(" ",
/* get */
" ", _apply$ifBody);

export default _createRenderFn(template, walks, apply);