// template.marko
const $input_attrs__OR__title__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $input_attrs__OR__title = /*@__PURE__*/ _or(6, ($scope) => {
	_attrs_content($scope, "a", {
		title: $scope.f,
		...$scope.e
	});
	$input_attrs__OR__title__script($scope);
});
const $title = /*@__PURE__*/ _let(5, $input_attrs__OR__title);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$title($scope, "b");
}));
