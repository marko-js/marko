// template.marko
const $doubled__OR__tripled = ($scope) => {
	_text($scope.b, $scope.c * 2 * ($scope.c * 3) + $scope.c * 2);
};
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$doubled__OR__tripled($scope);
	$count__script($scope);
});
