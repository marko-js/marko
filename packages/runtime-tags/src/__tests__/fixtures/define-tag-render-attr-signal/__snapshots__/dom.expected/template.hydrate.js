// size: 379 (min) 231 (brotli)
const $number$define$content = _$.value(3, ($scope, number) =>
    _$.data($scope[0], number),
  ),
  $params2$define$content = _$.value(1, ($scope, $params2) =>
    $temp$define$content($scope, $params2?.[0]),
  ),
  $temp$define$content = _$.value(2, ($scope, $temp) =>
    $number$define$content($scope, $temp.number),
  );
_$.registerContent("a0", "<div> </div>", "D ", 0, $params2$define$content);
const $dynamicTag = _$.dynamicTag(),
  $expr_x_MyTag = _$.intersection(5, ($scope) => {
    const { 3: x, 4: MyTag } = $scope;
    $dynamicTag($scope, MyTag, () => ({ number: x }));
  }),
  $x_effect = _$.effect("a1", ($scope, { 3: x }) =>
    _$.on($scope[1], "click", function () {
      $x($scope, x + 1);
    }),
  ),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[2], x), $expr_x_MyTag($scope), $x_effect($scope);
  });
init();
