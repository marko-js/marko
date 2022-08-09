import { setSource as _setSource, queueSource as _queueSource, on as _on, data as _data, subscriber as _subscriber, register as _register, queueHydrate as _queueHydrate, source as _source, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _onclick = (_scope, a) => {
  const b = _scope[3];
  return b;
};

const _onclick2 = function (_scope) {
  const a = _scope[2];

  _queueSource(_scope, _a, a.map(_bind(_scope, _onclick)));
};

const _hydrate_expr_a_b = _register("packages/translator/src/__tests__/fixtures/basic-handler-multi-ref-nested/template.marko_0_a_b", _scope => {
  const a = _scope[2],
        b = _scope[3];

  _on(_scope[0], "click", _bind(_scope, _onclick2));
});

const _expr_a_b = _subscriber([], 2, (_scope, a = _scope[2], b = _scope[3]) => _queueHydrate(_scope, _hydrate_expr_a_b));

const _b = _source(3, [_expr_a_b]);

const _a = _source(2, [_expr_a_b], (_scope, a) => _data(_scope[1], a.join("")));

const _setup = _scope => {
  _setSource(_scope, _a, [0]);

  _setSource(_scope, _b, 1);
};

export const template = "<button> </button>";
export const walks =
/* get, next(1), get, out(1) */
" D l";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);