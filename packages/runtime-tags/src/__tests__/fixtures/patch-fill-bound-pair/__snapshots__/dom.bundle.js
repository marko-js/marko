// template.marko
const $if_content__fa__OR__fb = /*@__PURE__*/ _or_patch("a2", 1, ($scope) => _text($scope.a, $scope._.g() + ":" + $scope._.h()));
const $if_content__fa = /*@__PURE__*/ _if_closure_patch("a4", 0, 0, $if_content__fa__OR__fb);
const $if_content__setup = ($scope) => {
	$if_content__fa._($scope);
	$if_content__fb._($scope);
};
const $if_content__fb = /*@__PURE__*/ _if_closure_patch("a5", 0, 0, $if_content__fa__OR__fb);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.i);
}));
const $fa = ($scope) => () => $scope.e;
const $fb = ($scope) => () => $scope.f;
_bind_resume("a0 e", $fa);
_bind_resume("a1 f", $fb);
