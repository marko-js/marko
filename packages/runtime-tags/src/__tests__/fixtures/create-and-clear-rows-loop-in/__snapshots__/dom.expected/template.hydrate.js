// size: 340 (min) 159 (brotli)
const _key$for_content2 = _$.value(2, (_scope, key) => _$.data(_scope[0], key)),
  _params_3$for_content = _$.value(1, (_scope, _params_3) =>
    _key$for_content2(_scope, _params_3[0]),
  );
_$.register(
  "a0",
  _$.createRenderer("<p> </p>", "D ", void 0, () => _params_3$for_content),
);
const _text$for_content = _$.value(4, (_scope, text) =>
    _$.data(_scope[1], text),
  ),
  _key$for_content = _$.value(3, (_scope, key) => _$.data(_scope[0], key)),
  _params_2$for_content = _$.value(2, (_scope, _params_2) => {
    _key$for_content(_scope, _params_2[0]),
      _text$for_content(_scope, _params_2[1]);
  });
_$.register(
  "a1",
  _$.createRenderer(
    "<p><!>: <!></p>",
    "D%c%",
    void 0,
    () => _params_2$for_content,
  ),
);
