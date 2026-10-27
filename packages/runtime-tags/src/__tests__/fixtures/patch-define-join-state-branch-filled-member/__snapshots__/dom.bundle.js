// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $if_content2__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Info_content__setup($scope.a);
};
const $if_content__input_a__script = _script("b5", ($scope) => $scope.a.textContent = "s:" + $scope._.f);
const $if_content__input_a = /*@__PURE__*/ _fill_join("b7 b8", 5, /*@__PURE__*/ _if_closure(1, 0, $if_content__input_a__script));
const $if_content__setup = $if_content__input_a;
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b9", 6, /*@__PURE__*/ _fill_join_subscribers("b8 | b7", 5, /*@__PURE__*/ _or_resume("b3", 1, ($scope) => _text($scope.a, $scope._.f + ":" + $scope._.g)), 9, 0), 10, 0);
const $Info_content__input_a = /*@__PURE__*/ _closure_get(9, $Info_content__input_a__OR__input_b, 0, "b1");
const $Info_content__setup = ($scope) => {
	$Info_content__input_a($scope);
	$Info_content__input_b($scope);
};
const $Info_content__input_b = /*@__PURE__*/ _closure_get(10, $Info_content__input_a__OR__input_b, 0, "b2");
const $if2 = /*@__PURE__*/ _if(1, "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b10", 8, ($scope) => $if2($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b6", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content2__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_b__closure = /*@__PURE__*/ _closure($Info_content__input_b);
const $input_b = /*@__PURE__*/ _const(6, $input_b__closure);

// template.marko
const $n = /*@__PURE__*/ _let(9, ($scope) => $input_b($scope.a, $scope.j));
const $s = /*@__PURE__*/ _let(10, ($scope) => $input_show($scope.a, $scope.k));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, $scope.j + "k");
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.k);
	});
});
