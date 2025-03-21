// size: 420 (min) 203 (brotli)
_$.register("a0", function (_scope) {
  return function (html) {
    _scope[0].innerHTML = html;
  };
}),
  _$.effect("b0", ({ 2: input_value }) => input_value),
  _$.effect("c0", (_scope) => _get_hoisted_setHtml(_scope._)("Hello world"));
const _get_hoisted_setHtml = _$.hoist(17, "d3");
_$.registerBoundSignal("c1", _$.value(17));
const _get_hoisted_setHtml2 = _$.hoist(12, "d2");
_$.registerBoundSignal("c2", _$.value(12));
const _get_hoisted_setHtml3 = _$.register("c3", _$.hoist(6, "d0", "d0"));
_$.registerBoundSignal("c4", _$.value(6)),
  _$.effect("c5", (_scope) => {
    _get_hoisted_setHtml3(_scope)("Hello world"),
      _get_hoisted_setHtml2(_scope)("Hello world");
  }),
  init();
