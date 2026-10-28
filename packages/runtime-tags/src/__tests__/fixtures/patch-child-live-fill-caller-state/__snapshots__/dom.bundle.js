// tags/child.marko
const $if_content__fmt = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_signal("5 b3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f("x")))));
const $if_content__setup = $if_content__fmt;
const $fmt2 = /*@__PURE__*/ _fill_const("b3", 5, $if_content__fmt);
const $input_suffix = /*@__PURE__*/ _const(3, ($scope) => $fmt2($scope, $fmt($scope)));
const $if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $fmt = ($scope) => (v) => v + $scope.d;
_bind_resume("b0 d", $fmt);

// tags/mid.marko
const $s = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $input_suffix($scope.a, $scope.f));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$s($scope, $scope.f + "!");
}));
const $input_show = ($scope, input_show) => $input_show$1($scope.a, input_show);

// template.marko
const $show = /*@__PURE__*/ _let(2, ($scope) => $input_show($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
