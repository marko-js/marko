// size: 361 (min) 210 (brotli)
const $input_thing_selected = _._const(5, ($scope) =>
    _._attr_class_item($scope.a, "selected", $scope.f),
  ),
  $dynamicTag = _._dynamic_tag(1),
  $input_thing_content = _._const(6, ($scope) => $dynamicTag($scope, $scope.g)),
  $input_thing = _._const(4, ($scope) => {
    ($input_thing_selected($scope, $scope.e?.selected),
      $input_thing_content($scope, $scope.e?.content));
  }),
  $myThing_content = _._content("b0", "<span>The thing</span>", "b"),
  $myThing = _._const(3, ($scope) => $input_thing($scope.a, $scope.d)),
  $selected__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
      $selected($scope, !$scope.c);
    }),
  ),
  $selected = _._let(2, ($scope) => {
    ($myThing($scope, {
      selected: $scope.c,
      content: $myThing_content($scope),
    }),
      $selected__script($scope));
  });
init();
