import { setSource as _setSource, queueSource as _queueSource, on as _on, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, derivation as _derivation, notifySignal as _notifySignal, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _onclick = function (_scope) {
  const clickCount = _scope[4];

  _queueSource(_scope, _clickCount, clickCount + 1);
};

const _hydrate_clickCount = _register("packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount", _scope => {
  const clickCount = _scope[4];

  _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _onclick));
});

const _clickCount = /* @__PURE__ */_source(4, [], (_scope, clickCount) => {
  _data(_scope[1], clickCount);

  _queueHydrate(_scope, _hydrate_clickCount);
});

const _unused_2 = /* @__PURE__ */_derivation(3, 1, [], _scope => 456);

const _unused_ = /* @__PURE__ */_source(2, []);

const _setup = _scope => {
  _setSource(_scope, _unused_, 123);

  _setSource(_scope, _clickCount, 0);

  _notifySignal(_scope, _unused_2);
};

export const template = "<div><button> </button></div>";
export const walks =
/* next(1), get, next(1), get, out(2) */
"D D m";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);