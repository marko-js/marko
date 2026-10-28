// template.marko
const $for_content__input_prefix__OR__headingId = /*@__PURE__*/ _fill_join_for("a1", 5, /*@__PURE__*/ _or(5, ($scope) => _attr($scope.c, "title", $scope._.f + " " + $scope.e)), 1);
const $for_content__input_prefix = /*@__PURE__*/ _for_closure(1, $for_content__input_prefix__OR__headingId);
const $for_content__headingId = /*@__PURE__*/ _const(4, ($scope) => {
	_attr($scope.a, "id", $scope.e);
	_attr($scope.c, "aria-describedby", $scope.e);
	$for_content__input_prefix__OR__headingId($scope);
});
const $for_content__setup = ($scope) => {
	$for_content__input_prefix._($scope);
	_text($scope.b, $scope.M);
	$for_content__headingId($scope, _id($scope));
};
const $for = /*@__PURE__*/ _for_of(1, "<h2> </h2><input>", " D l ", $for_content__setup);
const $items = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g, "key"]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.g, { key: "c" }]);
}));
