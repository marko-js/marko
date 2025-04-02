// size: 243 (min) 168 (brotli)
const _expr_selected_num$for_content = _$.intersection(4, (_scope) => {
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
const _selected$for_content = _$.loopClosure(
    1,
    0,
    _expr_selected_num$for_content,
  ),
  _selected = _$.state(1, _selected$for_content);
init();
