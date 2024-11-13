// size: 297 (min) 193 (brotli)
const _expr_selected_num$forBody = _$.intersection(2, (_scope) => {
  const {
    _: { 1: selected },
    3: num,
  } = _scope;
  _$.attr(_scope[0], "data-selected", selected === num),
    _$.attr(_scope[0], "data-multiple", num % selected == 0);
});
_$.effect("a0", (_scope) =>
  _$.on(
    _scope[0],
    "click",
    ((_scope) => {
      const { 3: num } = _scope;
      return function () {
        _selected(_scope._, num);
      };
    })(_scope),
  ),
);
const _selected$forBody = _$.closure(
    1,
    0,
    void 0,
    () => _expr_selected_num$forBody,
  ),
  _selected = _$.state(1, 0, () => _$.inLoopScope(_selected$forBody, 0));
init();
