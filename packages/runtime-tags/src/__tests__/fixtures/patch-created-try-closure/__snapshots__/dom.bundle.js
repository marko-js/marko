// template.marko
const $catch_content = _content$1("a5", "caught");
const $try_content__count = _shell_closure_get("a10", 8, ($scope) => _text($scope.a, $scope._._.g), ($scope) => $scope._._, "a4");
const $count = /*@__PURE__*/ _fill_let("a8", 6, /* @__PURE__ */ _closure($try_content__count));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
