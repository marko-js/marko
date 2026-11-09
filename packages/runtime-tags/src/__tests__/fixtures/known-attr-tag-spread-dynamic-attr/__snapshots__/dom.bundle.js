// tags/child.marko
const $attrs__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $attrs = /*@__PURE__*/ _const(4, ($scope) => {
	_attrs($scope, "a", $scope.e);
	$attrs__script($scope);
});

// template.marko
const $obj = /*@__PURE__*/ _let(2, ($scope) => {
	$attrs($scope.b, (({ content, ...attrs }) => attrs)($scope.c));
	$obj_class($scope, $scope.c?.class);
});
const $obj_class = /*@__PURE__*/ _const(3);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, { class: $scope.d + "a" });
}));
