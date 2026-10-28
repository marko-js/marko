// template.marko
const $if_content2__n = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._._.g), ($scope) => $scope._._._, "a0");
const $if_content2__setup = ($scope) => {
	$if_content2__n($scope);
	$if_content2__x._($scope);
};
const $if_content2__x = /*@__PURE__*/ _fill("a2", 3, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d)));
const $await_content__if = /*@__PURE__*/ _if(1, "<em><!>:<!></em>", "D%c%", $if_content2__setup);
const $await_content__n = /*@__PURE__*/ _init_resume("a11", /*@__PURE__*/ _closure_get(8, ($scope) => $await_content__if($scope, $scope._._.g % 2 ? 0 : 1), ($scope) => $scope._._, "a3"));
const $await_content__x__script = _script("a1", ($scope) => console.log("await", $scope.d));
const $n = _let(6, /* @__PURE__ */ _closure($await_content__n, $if_content2__n));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
