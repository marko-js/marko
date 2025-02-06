// size: 640 (min) 243 (brotli)
const _expr_input_count2_input_count2Change = _$.intersection(2, (_scope) => {
    const { 8: input_count2, 9: input_count2Change } = _scope;
    _count2$1(_scope, input_count2, input_count2Change);
  }),
  _expr_input_count1_input_count1Change = _$.intersection(2, (_scope) => {
    const { 6: input_count1, 7: input_count1Change } = _scope;
    _count$1(_scope, input_count1, input_count1Change);
  }),
  _count2_effect = _$.effect("a0", (_scope, { 11: count2 }) =>
    _$.on(_scope[2], "click", function () {
      _count2$1(_scope, count2 + 1);
    }),
  ),
  _count2$1 = _$.state(11, (_scope, count2) => {
    _$.data(_scope[3], count2), _count2_effect(_scope);
  }),
  _count_effect = _$.effect("a1", (_scope, { 10: count1 }) =>
    _$.on(_scope[0], "click", function () {
      _count$1(_scope, count1 + 1);
    }),
  ),
  _count$1 = _$.state(10, (_scope, count1) => {
    _$.data(_scope[1], count1), _count_effect(_scope);
  }),
  _input_count2_ = _$.value(8, 0, () => _expr_input_count2_input_count2Change),
  _input_count1_ = _$.value(6, 0, () => _expr_input_count1_input_count1Change),
  _count2 = _$.state(
    4,
    (_scope, count2) => {
      _$.data(_scope[2], count2), _input_count2_(_scope[0], count2);
    },
    () => _$.inChild(0, _input_count2_),
  ),
  _count = _$.state(
    3,
    (_scope, count1) => {
      _$.data(_scope[1], count1), _input_count1_(_scope[0], count1);
    },
    () => _$.inChild(0, _input_count1_),
  );
_$.register("b0", function (_scope) {
  return (_new_count1) => {
    _count(_scope, _new_count1);
  };
}),
  _$.register("b1", function (_scope) {
    return (_new_count2) => {
      _count2(_scope, _new_count2);
    };
  }),
  init();
