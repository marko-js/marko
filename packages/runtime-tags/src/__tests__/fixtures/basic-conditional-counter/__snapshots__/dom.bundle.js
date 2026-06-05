// template.marko
const $if_content__count = /* @__PURE__ */ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /* @__PURE__ */ _if(2, "<span> </span>", "D l", $if_content__count);
const $show__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show__script($scope);
});
const $count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /* @__PURE__ */ _let(4, ($scope) => {
	$if_content__count($scope);
	$count__script($scope);
});
