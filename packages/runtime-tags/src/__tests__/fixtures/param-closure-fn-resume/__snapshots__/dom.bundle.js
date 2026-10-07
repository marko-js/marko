// tags/child.marko
const $if_content__bar = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f("foo")));
const $if_content__setup = $if_content__bar;
const $if = /*@__PURE__*/ _if(0, "<div> </div>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $bar = ($scope) => function(test) {
	return $scope.d + test;
};
_resumed.b0 = $bar;

// template.marko
const $show = /*@__PURE__*/ _let(2, ($scope) => $input_show($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
