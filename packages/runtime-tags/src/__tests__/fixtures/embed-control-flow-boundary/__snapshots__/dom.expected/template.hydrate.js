// size: 278 (min) 173 (brotli)
const $if = _._if(2, "<div>Hello</div>", "b"),
  $hide__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $hide($scope, !$scope.d);
    }),
  ),
  $hide = _._let(3, ($scope) => {
    ($if($scope, $scope.d ? 1 : 0), $hide__script($scope));
  });
(_._script("a1", ($scope) => {
  ((_.$signal($scope, 0).onabort = () => {
    console.log("cleaned up");
  }),
    _._on($scope.b, "click", function () {
      document.body.innerHTML = "";
    }));
}),
  initEmbedded("a"));
