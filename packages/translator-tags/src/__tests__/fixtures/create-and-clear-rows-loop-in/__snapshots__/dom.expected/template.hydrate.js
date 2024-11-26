// size: 354 (min) 156 (brotli)
const _key$forBody2 = _$.value(2, (_scope, key) => _$.data(_scope[0], key)),
  _params_3$forBody = _$.value(1, (_scope, _params_3) =>
    _key$forBody2(_scope, _params_3[0]),
  );
_$.register(
  "a0",
  _$.createRenderer("<p> </p>", "D ", void 0, void 0, () => _params_3$forBody),
);
const _text$forBody = _$.value(4, (_scope, text) => _$.data(_scope[1], text)),
  _key$forBody = _$.value(3, (_scope, key) => _$.data(_scope[0], key)),
  _params_2$forBody = _$.value(2, (_scope, _params_2) => {
    _key$forBody(_scope, _params_2[0]), _text$forBody(_scope, _params_2[1]);
  });
_$.register(
  "a1",
  _$.createRenderer(
    "<p><!>: <!></p>",
    "D%c%",
    void 0,
    void 0,
    () => _params_2$forBody,
  ),
);
