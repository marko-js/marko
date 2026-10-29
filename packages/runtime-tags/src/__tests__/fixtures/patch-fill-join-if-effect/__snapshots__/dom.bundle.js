// tags/child.marko
const $if_content3__input_a = /*@__PURE__*/ _fill_join("b7", 7, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if_content3__setup = $if_content3__input_a;
const $if_content2__input_a__script = _script("b3", ($scope) => $scope.a.textContent = "s:" + $scope._.h);
const $if_content2__input_a = /*@__PURE__*/ _init_resume("b4", /*@__PURE__*/ _fill_join("b7", 7, /*@__PURE__*/ _if_closure(1, 0, $if_content2__input_a__script)));
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b8", 8, /*@__PURE__*/ _fill_join_if("b7", 7, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.h + $scope._.i)), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if3 = /*@__PURE__*/ _if(2, "<i> </i>", "D ", $if_content3__setup);
const $open = /*@__PURE__*/ _fill_let("b9", 10, ($scope) => $if3($scope, $scope.k ? 0 : 1));
const $setup__script$1 = _script("b5", ($scope) => _on($scope.d, "click", function() {
	$open($scope, !$scope.k);
}));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
_fill_run("b6", 7, /*@__PURE__*/ _fill_mark(7, ($scope) => {
	$if_content2__input_a($scope);
	$if_content3__input_a($scope);
}));
const $input_b = /*@__PURE__*/ _const(8, $if_content__input_b);

// template.marko
const $n = /*@__PURE__*/ _let(7, ($scope) => $input_b($scope.a, $scope.h));
const $s = /*@__PURE__*/ _let(8, ($scope) => $input_show($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$n($scope, $scope.h + "k");
	});
	_on($scope.c, "click", function() {
		$s($scope, !$scope.i);
	});
});
