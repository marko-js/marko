// tags/child.marko
const $if_content2__input_a__script = _script("b2", ($scope) => $scope.a.textContent = "s:" + $scope._.g);
const $if_content2__input_a = /*@__PURE__*/ _fill("b4 b5", 6, /*@__PURE__*/ _if_closure(1, 0, $if_content2__input_a__script));
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_if("b6", 7, /*@__PURE__*/ _fill_if("b5 | b4", 6, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.g + $scope._.h)), 0, 0), 0, 0);
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
const $n = _let(6, ($scope) => $input_b($scope.a, $scope.g));
const $s = _let(7, ($scope) => $input_show($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$n($scope, $scope.g + "k");
	});
	_on($scope.c, "click", function() {
		$s($scope, !$scope.h);
	});
});
