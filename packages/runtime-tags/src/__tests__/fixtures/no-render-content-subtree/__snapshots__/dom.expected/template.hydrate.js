// size: 169 (min) 146 (brotli)
const _expr_input_x_effect = _$.effect(
    "a0",
    ({ 3: input, 5: x }) => (input.output().innerHTML = x),
  ),
  _expr_input_x = _$.intersection(
    6,
    (_scope) => _expr_input_x_effect(_scope),
    1,
    1,
  );
_$.registerBoundSignal(
  "a1",
  _$.value(5, (_scope) => _expr_input_x(_scope)),
),
  _$.nodeRef("c0", "j0"),
  init();
