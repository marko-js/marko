// size: 147 (min) 125 (brotli)
const $expr_input_x_effect = _$.effect(
    "a0",
    ({ 3: input, 5: x }) => (input.output().innerHTML = x),
  ),
  $expr_input_x = _$.intersection(6, $expr_input_x_effect);
(_$.registerBoundSignal("a1", _$.value(5, $expr_input_x)),
  _$.nodeRef("c0", "j0"),
  init());
