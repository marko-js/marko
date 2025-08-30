// size: 236 (min) 169 (brotli)
const $expr_selected_num$for$content = _$.intersection(4, ($scope) => {
  let {
    _: { 1: selected },
    3: num,
  } = $scope;
  (_$.attr($scope[0], "data-selected", selected === num),
    _$.attr($scope[0], "data-multiple", num % selected === 0));
});
_$.effect("a0", ($scope, { 3: num }) =>
  _$.on($scope[0], "click", function () {
    $selected($scope._, num);
  }),
);
const $selected$for$content = _$.loopClosure(
    1,
    0,
    $expr_selected_num$for$content,
  ),
  $selected = _$.state(1, $selected$for$content);
init();
