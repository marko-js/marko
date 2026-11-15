// tags/label-text.marko
const $if_content__getLabel = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.h()));
const $if_content__setup = $if_content__getLabel;
const $getLabel = _var_resume("c1", /*@__PURE__*/ _const(7, $if_content__getLabel));
const $if = /*@__PURE__*/ _if(2, "<span> </span>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $value = ($scope) => () => $scope.f;
_resumed.c0 = $value;

// template.marko
const $show = /*@__PURE__*/ _let(2, ($scope) => $input_show($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
