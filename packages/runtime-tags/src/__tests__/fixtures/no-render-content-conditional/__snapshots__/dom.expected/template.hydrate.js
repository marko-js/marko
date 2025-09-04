// size: 128 (min) 116 (brotli)
const $input__OR__x__script = _._script(
    "a0",
    ({ 3: input, 5: x }) => (input.output().innerHTML = x),
  ),
  $input__OR__x = _._or(6, $input__OR__x__script);
(_._var_resume("a1", _._const(5, $input__OR__x)), _._el("c0", "j0"), init());
