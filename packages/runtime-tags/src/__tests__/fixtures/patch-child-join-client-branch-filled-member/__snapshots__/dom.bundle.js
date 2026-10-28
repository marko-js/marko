// tags/child.marko
const $if_content2__input_a__script = _script("b2", ($scope) => $scope.a.textContent = "s:" + $scope._.g);
const $if_content2__input_a = /*@__PURE__*/ _fill_signal("6 b4 b5", /*@__PURE__*/ _if_closure(1, 0, $if_content2__input_a__script));
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("6 b5 | b4,7 b6", /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.g + $scope._.h)), _if_closure, 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if2 = /*@__PURE__*/ _if(1, "<div></div>", " ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b7", 8, ($scope) => $if2($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_b = /*@__PURE__*/ _const(7, $if_content__input_b);

// template.marko
const $n = /*@__PURE__*/ _let(10, ($scope) => $input_b($scope.a, $scope.k));
const $s = /*@__PURE__*/ _let(11, ($scope) => {
	$input_show($scope.a, $scope.l);
	$input_show($scope.c, $scope.l);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.d, "click", function() {
		$n($scope, $scope.k + "k");
	});
	_on($scope.e, "click", function() {
		$s($scope, !$scope.l);
	});
});
