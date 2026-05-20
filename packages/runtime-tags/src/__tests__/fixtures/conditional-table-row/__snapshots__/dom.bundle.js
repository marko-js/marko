// total: 5593 (min) 2601 (brotli)
// template.marko: 131 (min) 105 (brotli)
const $if = /* @__PURE__ */ _if(0, "<tr><td>Hi</td></tr>", "b");
const $show__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
