// template.marko
function watch(signal, name, value) {
	console.log("read", name, value, signal.aborted);
	signal.onabort = () => console.log("abort", name, value);
	return value;
}
const $if_content__input_attrs__OR__count__script = _script("a0", ($scope) => _attrs_script($scope, "a"));
const $if_content__input_attrs__OR__count = /*@__PURE__*/ _or(3, ($scope) => {
	$signalReset($scope, 0);
	_attrs_content($scope, "a", {
		"data-spread": watch($signal($scope, 0), "spread", $scope._.h),
		...$scope._.g
	});
	$if_content__input_attrs__OR__count__script($scope);
});
const $if_content__input_attrs = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_attrs__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__count._($scope);
};
const $if_content__big = /*@__PURE__*/ _const(4, ($scope) => {
	$signalReset($scope, 3);
	_attr($scope.c, "data-big", watch($signal($scope, 3), "big", $scope.e));
});
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$signalReset($scope, 1);
	$signalReset($scope, 2);
	_attr($scope.b, "data-first", watch($signal($scope, 1), "first", $scope._.h));
	_attr($scope.b, "data-second", watch($signal($scope, 2), "second", $scope._.h));
	$if_content__big($scope, $scope._.h > 1);
	$if_content__input_attrs__OR__count($scope);
});
const $if = /*@__PURE__*/ _if(0, "<div></div><div></div><div></div>", " b b ", $if_content__setup);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$if($scope, $scope.h ? 0 : 1);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, +$scope.h + 1);
	});
	_on($scope.d, "click", function() {
		$count($scope, 0);
	});
});
