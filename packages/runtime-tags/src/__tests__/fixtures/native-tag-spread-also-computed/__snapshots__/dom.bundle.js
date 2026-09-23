// template.marko
function withCount(attrs, count) {
	return {
		...attrs,
		"data-count": count
	};
}
const $input_attrs__OR__count__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $input_attrs__OR__count = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs_content($scope, "b", withCount($scope.f, $scope.g));
	$input_attrs__OR__count__script($scope);
});
const $count = /*@__PURE__*/ _let(6, $input_attrs__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_attrs__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
