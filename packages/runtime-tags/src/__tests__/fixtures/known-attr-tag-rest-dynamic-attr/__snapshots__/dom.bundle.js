// tags/child.marko
const $attrs__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $attrs = /*@__PURE__*/ _const(4, ($scope) => {
	_attrs($scope, "a", $scope.e);
	$attrs__script($scope);
});

// template.marko
const $cls = /*@__PURE__*/ _let(2, ($scope) => $attrs($scope.b, { class: $scope.c }));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$cls($scope, $scope.c + "a");
}));
