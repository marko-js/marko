// size: 349 (min) 145 (brotli)
const $el_getter = _._hoist_resume("b0", 0, "Aa", "Ad"),
  $for_content__$el_getter = _._hoist_resume("b1", 0, "Aa"),
  $for_content2__$el_getter = _._hoist_resume("b2", 0);
(_._script(
  "b3",
  ($scope) =>
    ($scope._._.c.innerHTML += `${[...$for_content2__$el_getter($scope)].length}; ${$scope.a.className}\n\t`),
),
  _._script(
    "b4",
    ($scope) =>
      ($scope._.b.innerHTML += `${[...$for_content__$el_getter($scope)].length}; ${$for_content__$el_getter($scope)().className}\n\t`),
  ),
  _._script(
    "b5",
    ($scope) =>
      ($scope.a.innerHTML += `${[...$el_getter($scope)].length}; ${$el_getter($scope)().className}\n\t`),
  ),
  init());
