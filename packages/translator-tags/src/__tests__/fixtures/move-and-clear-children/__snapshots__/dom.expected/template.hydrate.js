// size: 175 (min) 128 (brotli)
const _child_text$forBody = _$.value(3, (_scope, child_text) =>
    _$.data(_scope[0], child_text),
  ),
  _child$forBody = _$.value(2, (_scope, child) =>
    _child_text$forBody(_scope, child?.text),
  ),
  _params_2$forBody = _$.value(1, (_scope, _params_2) =>
    _child$forBody(_scope, _params_2[0]),
  );
_$.register(
  "a0",
  _$.createRenderer(" ", " ", void 0, void 0, () => _params_2$forBody),
);
