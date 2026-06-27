// template.marko
const $sum = ($scope, sum) => _text($scope.b, sum);
const $y__OR__z = ($scope) => {
	$sum($scope, $scope.c + 1 + ($scope.c + 2));
};
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$y__OR__z($scope);
	$count__script($scope);
});
