// tags/flag.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("d1", 6, /*@__PURE__*/ _or_resume("d2", 8, ($scope) => "h" in $scope && $dynamicTag($scope, $scope.h, ($_) => ({ label: $scope.g }))));
const $T = /*@__PURE__*/ _let(7, ($scope) => {
	$input_value($scope.b, `${!!$scope.h}`);
	$input_label__OR__T($scope);
});
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));
