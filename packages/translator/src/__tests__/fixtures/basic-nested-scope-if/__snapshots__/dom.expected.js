import { queue as _queue, write as _write, on as _on, data as _data, setConditionalRenderer as _setConditionalRenderer, register as _register, queueHydrate as _queueHydrate, queueInBranch as _queueInBranch, bind as _bind, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate_clickCount(_scope, clickCount = _scope._[4]) {
  _on(_scope, 0, "click", _scope[2]);
}

_register("packages/translator/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_0", _hydrate_clickCount);

const _onclick = function (_scope) {
  const clickCount = _scope._[4];

  _queue(_scope._, _apply_clickCount, 0, clickCount + 1);
};

function _apply_clickCount2(_scope, clickCount = _scope._[4]) {
  _write(_scope, 2, _bind(_scope, _onclick));

  _data(_scope, 1, clickCount);

  _queueHydrate(_scope, _hydrate_clickCount);
}

function _apply2(_scope) {
  _queue(_scope, _apply_clickCount2, 0);
}

function _apply_clickCount(_scope, clickCount) {
  if (_write(_scope, 4, clickCount)) {
    _setConditionalRenderer(_scope, 0, clickCount < 3 ? _if : null);

    _queueInBranch(_scope, 0, _if, _apply_clickCount2, 0, 1);
  }
}

function _apply(_scope) {
  _apply_clickCount(_scope, 0);
}

const _if = _createRenderer("<button><!></button>",
/* get, next(1), replace */
" D%", _apply2);

export const template = "<div><!></div>";
export const walks =
/* next(1), replace, skip(3), out(1) */
"D%+l";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);