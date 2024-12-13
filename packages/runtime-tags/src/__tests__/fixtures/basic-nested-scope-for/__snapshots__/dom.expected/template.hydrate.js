// size: 277 (min) 179 (brotli)
const _expr_selected_num$forBody = _$.intersection(2, (_scope) => {
  const {
    _: { 1: selected },
    3: num,
  } = _scope;
  _$.attr(_scope[0], "data-selected", selected === num),
    _$.attr(_scope[0], "data-multiple", num % selected == 0);
});
_$.effect("a0", (_scope, { 3: num }) =>
  _$.on(_scope[0], "click", function () {
    _selected(_scope._, num);
  }),
);
const _selected$forBody = _$.closure(
    1,
    0,
    void 0,
    () => _expr_selected_num$forBody,
  ),
  _selected = _$.state(1, 0, () => _$.inLoopScope(_selected$forBody, 0));
init();
