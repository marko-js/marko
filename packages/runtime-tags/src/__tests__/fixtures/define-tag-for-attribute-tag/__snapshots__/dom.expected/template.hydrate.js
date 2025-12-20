// size: 329 (min) 200 (brotli)
const $input_thing_selected = _._const(5, ($scope) =>
    _._attr_class_item($scope.a, "selected", $scope.f),
  ),
  $dynamicTag = _._dynamic_tag(1),
  $input_thing = ($scope, input_thing) => {
    ($input_thing_selected($scope, input_thing?.selected),
      (($scope, input_thing_content) => {
        $dynamicTag($scope, input_thing_content);
      })($scope, input_thing?.content));
  },
  $myThing_content = _._content("b0", "<span>The thing</span>", "b"),
  $selected__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
      $selected($scope, !$scope.c);
    }),
  ),
  $selected = _._let(2, ($scope) => {
    ((($scope, myThing) => {
      $input_thing($scope.a, myThing);
    })($scope, { selected: $scope.c, content: $myThing_content($scope) }),
      $selected__script($scope));
  });
init();
