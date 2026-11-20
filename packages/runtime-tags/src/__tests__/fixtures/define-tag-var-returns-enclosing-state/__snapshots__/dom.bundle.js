// template.marko
const $if_content__doubled = /*@__PURE__*/ _if_closure(4, 0, ($scope) => _text($scope.a, $scope._.g));
const $if_content__setup = $if_content__doubled;
const $Double_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _return($scope, $scope._.f * 2), 0, "a1");
const $if = /*@__PURE__*/ _if(4, "<em> </em>", "D ", $if_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Double_content__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if($scope, $scope.f ? 0 : 1);
	$count__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $doubled = _var_resume("a2", /*@__PURE__*/ _const(6, $if_content__doubled));
