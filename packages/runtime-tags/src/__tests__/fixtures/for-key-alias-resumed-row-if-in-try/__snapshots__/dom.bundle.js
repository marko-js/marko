// template.marko
const $catch_content = _content("a1", "caught");
const $if_content__setup = ($scope) => _text($scope.a, $scope._._.M);
const $try_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._._.c ? 0 : 1), ($scope) => $scope._._, "a0");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
