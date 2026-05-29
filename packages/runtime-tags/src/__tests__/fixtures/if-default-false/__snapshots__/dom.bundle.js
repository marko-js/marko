// total: 5823 (min) 2668 (brotli)
// template.marko: 113 (min) 99 (brotli)
const $if = /* @__PURE__ */ _if(1, "hi", "b");
const $show__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
