import { queue as _queue, on as _on, data as _data, setConditionalRenderer as _setConditionalRenderer, queueInBranch as _queueInBranch, register as _register, bind as _bind, queueHydrate as _queueHydrate, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply2_clickCount(_scope, clickCount = _scope._[4]) {
  _data(_scope[0], clickCount);
}

function _apply3(_scope) {
  _queue(_scope, _apply2_clickCount, 0);
}

const _onclick = function (_scope) {
  const clickCount = _scope._[4];

  _queue(_scope._, _apply_clickCount, 0, clickCount + 1);
};

function _hydrate1_clickCount(_scope, clickCount = _scope._[4]) {
  _on(_scope[0], "click", _bind(_scope, _onclick));
}

_register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount", _hydrate1_clickCount);

function _apply1_clickCount(_scope, clickCount = _scope._[4]) {
  _data(_scope[1], clickCount);

  _queueHydrate(_scope, _hydrate1_clickCount);
}

function _apply2(_scope) {
  _queue(_scope, _apply1_clickCount, 0);
}

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 4, clickCount)) {
    _setConditionalRenderer(_scope, 0, clickCount < 3 ? _if2 : _if);

    _queueInBranch(_scope, 0, _if, _apply2_clickCount, 1, 2);

    _queueInBranch(_scope, 0, _if2, _apply1_clickCount, 1, 3);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);
}

export const template = "<div><!></div>";
export const walks =
/* next(1), replace, skip(3), out(1) */
"D%+l";
export const apply = _apply;

const _if2 = _createRenderer("<button> </button>",
/* get, next(1), get */
" D ", _apply2),
      _if = _createRenderer("<span>The button was clicked <!> times.</span>",
/* next(1), over(1), replace */
"Db%", _apply3);

export default _createRenderFn(template, walks, apply);