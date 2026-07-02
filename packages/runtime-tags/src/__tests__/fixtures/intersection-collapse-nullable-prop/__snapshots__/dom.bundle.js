// template.marko
const $obj = ($scope, obj) => $obj_label($scope, obj?.label);
const $obj_label__OR__n = ($scope) => {
	_text($scope.b, ($scope.e ?? "none") + ($scope.c ? 1 : 2));
};
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$obj($scope, $scope.c && { label: "hi" });
	$obj_label__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $obj_label = /* @__PURE__ */ _const(4);
