// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_a);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// tags/mid.marko
const $input_show = ($scope, input_show) => $input_show$1($scope.a, input_show);

// template.marko
const $show = _let(2, ($scope) => $input_show($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
