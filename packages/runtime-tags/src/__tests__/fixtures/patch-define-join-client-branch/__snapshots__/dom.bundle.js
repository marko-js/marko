// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $if_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Info_content__setup($scope.a);
};
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b6", 4, /*@__PURE__*/ _fill_join_subscribers("b5", 3, /*@__PURE__*/ _or_resume("b3", 1, ($scope) => _text($scope.a, $scope._.d + ":" + $scope._.e)), 6, 0), 7, 0);
const $Info_content__input_a = /*@__PURE__*/ _closure_get(6, $Info_content__input_a__OR__input_b, 0, "b1");
const $Info_content__setup = ($scope) => {
	$Info_content__input_a($scope);
	$Info_content__input_b($scope);
};
const $Info_content__input_b = /*@__PURE__*/ _closure_get(7, $Info_content__input_a__OR__input_b, 0, "b2");
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a = /*@__PURE__*/ _const(3, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => $input_a($scope.a, $scope.i));
const $s = /*@__PURE__*/ _let(9, ($scope) => {
	$input_show($scope.a, $scope.j);
	$input_show($scope.b, $scope.j);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$count($scope, +$scope.i + 1);
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.j);
	});
});
