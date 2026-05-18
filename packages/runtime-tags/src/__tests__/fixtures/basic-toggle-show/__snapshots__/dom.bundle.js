// total: 5603 (min) 2605 (brotli)
// template.marko: 117 (min) 98 (brotli)
const $if = /* @__PURE__ */ _if(0, "Hello!", "b");
const $show__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
