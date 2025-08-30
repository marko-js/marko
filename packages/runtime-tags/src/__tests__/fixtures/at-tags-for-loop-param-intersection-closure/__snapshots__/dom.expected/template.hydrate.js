// size: 304 (min) 204 (brotli)
const $expr_mult_item$item$content = _$.intersection(1, ($scope) => {
    let {
      _: { 3: mult },
      5: item,
    } = $scope;
    _$.data($scope[0], item * mult);
  }),
  $mult$item$content = _$.dynamicClosureRead(3, $expr_mult_item$item$content),
  $setup$item$content = $mult$item$content;
_$.localClosures(_$.registerContent("b0", " ", " b", $setup$item$content), {
  5: $expr_mult_item$item$content,
});
const $mult_closure = _$.dynamicClosure($mult$item$content),
  $mult_effect = _$.effect("b1", ($scope, { 3: mult }) =>
    _$.on($scope[1], "click", function () {
      $mult($scope, ++mult);
    }),
  ),
  $mult = _$.state(3, ($scope, mult) => {
    (_$.data($scope[2], mult), $mult_closure($scope), $mult_effect($scope));
  });
init();
