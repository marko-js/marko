// size: 371 (min) 223 (brotli)
const $input_thing_selected = _._const(5, ($scope) =>
    _._attr_class_item($scope[0], "selected", $scope[5]),
  ),
  $dynamicTag = _._dynamic_tag(1),
  $input_thing_content = _._const(6, ($scope) =>
    $dynamicTag($scope, $scope[6]),
  ),
  $input_thing = _._const(4, ($scope) => {
    ($input_thing_selected($scope, $scope[4]?.selected),
      $input_thing_content($scope, $scope[4]?.content));
  }),
  $myThing_content = _._content("b0", "<span>The thing</span>", "b"),
  $myThing = _._const(3, ($scope) => $input_thing($scope[0], $scope[3])),
  $selected__script = _._script("b1", ($scope) =>
    _._on($scope[1], "click", function () {
      $selected($scope, !$scope[2]);
    }),
  ),
  $selected = _._let(2, ($scope) => {
    ($myThing($scope, {
      selected: $scope[2],
      content: $myThing_content($scope),
    }),
      $selected__script($scope));
  });
init();
