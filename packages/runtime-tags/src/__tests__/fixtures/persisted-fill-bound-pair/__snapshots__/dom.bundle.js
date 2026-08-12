// template.marko
const $if_content__fa__OR__fb = /*@__PURE__*/ _fill_join_if("a1", 7, /*@__PURE__*/ _fill_join_if("a0", 6, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g() + ":" + $scope._.h())), 0, 0), 0, 0);
const $if_content__fa = /*@__PURE__*/ _if_closure(0, 0, $if_content__fa__OR__fb);
const $if_content__setup = ($scope) => {
	$if_content__fa._($scope);
	$if_content__fb._($scope);
};
const $if_content__fb = /*@__PURE__*/ _if_closure(0, 0, $if_content__fa__OR__fb);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.i);
}));
const $fa = ($scope) => () => $scope.e;
const $fb = ($scope) => () => $scope.f;
_resume("a0", $fa);
_resume("a1", $fb);
