// tags/meta-tag.marko
const $input_attrs__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input_attrs = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs($scope, "a", $scope.d);
	$input_attrs__script($scope);
});

// template.marko
const $description = /*@__PURE__*/ _let(3, ($scope) => $input_attrs($scope.b, {
	name: "description",
	content: $scope.d
}));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$description($scope, $scope.d + "!");
}));
