// template.marko
const $obj = ($scope, obj) => $obj_label($scope, obj?.label);
const $obj_label__OR__n = ($scope) => {
	_text($scope.b, ($scope.e ?? "none") + (("c" in $scope ? $scope.c : false) ? 1 : 2));
};
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$obj($scope, ("c" in $scope ? $scope.c : false) && { label: "hi" });
	$obj_label__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !("c" in $scope ? $scope.c : false));
}));
const $obj_label = /*@__PURE__*/ _const(4);
