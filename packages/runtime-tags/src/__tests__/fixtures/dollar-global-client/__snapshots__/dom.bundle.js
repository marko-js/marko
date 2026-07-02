// template.marko
const $if_content2__setup = ($scope) => _text($scope.a, $scope.$.x);
const $if_content__setup = ($scope) => _text($scope.a, $scope.$.x);
const $if = /* @__PURE__ */ _if(0, "<span> </span>", "D l", $if_content__setup);
const $if2 = /* @__PURE__ */ _if(1, "<span class=hidden> </span>", "D l", $if_content2__setup);
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$if2($scope, !$scope.d ? 0 : 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.d);
}));
