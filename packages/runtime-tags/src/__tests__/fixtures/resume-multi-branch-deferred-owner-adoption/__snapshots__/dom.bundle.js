// tags/child.marko
const $template = "<!><!><!>";
const $if_content__input = /*@__PURE__*/ _if_closure(0, 0, _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	$scope._.c.log().append(`destroyed ${$scope._.c.item}`);
} })));
const $if_content__setup = ($scope) => {
	$if_content__input._($scope);
	$if_content__input_item._($scope);
};
const $if_content__input_item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<span> </span>", "D l", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input_show($scope, $scope.c.show);
	$input_item($scope, $scope.c.item);
	$if_content__input($scope);
});
const $input_item = /*@__PURE__*/ _const(4, $if_content__input_item);

// template.marko
const $for_content__show__OR__item = /*@__PURE__*/ _or(3, ($scope) => $input($scope.a, {
	item: $scope.c,
	show: $scope._.f,
	log: $log_getter($scope._)
}));
const $for_content__show = /*@__PURE__*/ _for_closure(3, $for_content__show__OR__item);
const $for_content__setup = $for_content__show;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__show__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $log_getter = _el("a0", 2);
const $for = /*@__PURE__*/ _for_of(3, /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e]));
const $show = /*@__PURE__*/ _let(5, $for_content__show);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$show($scope, true);
	});
	_on($scope.b, "click", function() {
		$items($scope, []);
	});
});
