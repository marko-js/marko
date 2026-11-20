// tags/rec.marko
const $if_content2__v = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content2__setup = $if_content2__v;
const $if_content__if = /*@__PURE__*/ _if(2, "<em> </em>", "D ", $if_content2__setup);
const $if_content__shown = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__if($scope, $scope._.g ? 0 : 1));
const $if_content__v = _var_resume("b0", /*@__PURE__*/ _const(3, $if_content2__v));
const $shown = /*@__PURE__*/ _let(6, ($scope) => {
	_return($scope, $scope.g ? "on" : "off");
	$if_content__shown($scope);
});
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$shown($scope, !$scope.g);
}));
