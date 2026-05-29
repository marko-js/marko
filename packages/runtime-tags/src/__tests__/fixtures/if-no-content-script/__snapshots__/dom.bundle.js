// total: 5876 (min) 2696 (brotli)
// template.marko: 166 (min) 129 (brotli)
const $if = /* @__PURE__ */ _if(3, 0, 0, _script("a0", ($scope) => $scope._.a.textContent = "Hit"));
const $count__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$if($scope, !$scope.e ? 0 : 1);
	$count__script($scope);
});
