// template.marko
const $state_n__OR__state_tag = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$state($scope, {
		n: $scope.f + 1,
		tag: $scope.g
	});
}));
const $state = /* @__PURE__ */ _let(4, ($scope) => {
	$state_n($scope, $scope.e.n);
	$state_tag($scope, $scope.e.tag);
	$state_n__OR__state_tag($scope);
});
const $state_tag__OR__n = /* @__PURE__ */ _or(8, _script("a0", ($scope) => _on($scope.b, "click", function() {
	$log($scope, `${$scope.h}[${$scope.f}:${$scope.g}]`);
})));
const $state_n = /* @__PURE__ */ _const(5, ($scope) => {
	$n($scope, $scope.f);
	$state_tag__OR__n($scope);
});
const $n = ($scope) => {
	_text($scope.c, $scope.f);
};
const $state_tag = /* @__PURE__ */ _const(6, $state_tag__OR__n);
const $log = /* @__PURE__ */ _let(7, ($scope) => _text($scope.d, $scope.h));
