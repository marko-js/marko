// template.marko
const $Child_content__if = /*@__PURE__*/ _if(0, "shown");
const $Child_content__show = /*@__PURE__*/ _closure_get(4, ($scope) => $Child_content__if($scope, $scope._.d ? 0 : 1), 0, "b0");
const $show = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($Child_content__show));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
