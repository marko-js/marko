// size: 168 (min) 109 (brotli)
const _child_text$for_content = _$.value(3, (_scope, child_text) =>
    _$.data(_scope[0], child_text),
  ),
  _child$for_content = _$.value(2, (_scope, child) =>
    _child_text$for_content(_scope, child?.text),
  ),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _child$for_content(_scope, _params_2[0]),
  );
_$.register(
  "a0",
  _$.createRenderer(" ", " ", void 0, () => _params_2$for_content),
);
