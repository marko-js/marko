// tags/child.marko
const $input_value__OR__input_valueChange__script = _script("b0", ($scope) => {
	console.log("value", $scope.c);
	document.addEventListener("ping", () => {
		$scope.d($scope.c + 1);
	});
});
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(4, $input_value__OR__input_valueChange__script);
const $value = /*@__PURE__*/ _const(2, $input_value__OR__input_valueChange);
const $valueChange2 = /*@__PURE__*/ _const(3, $input_value__OR__input_valueChange);

// tags/counter.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $count = /*@__PURE__*/ _let(1, ($scope) => $value($scope.a, $scope.b));
function $setup($scope) {
	$valueChange2($scope.a, $valueChange($scope));
	$count($scope, 0);
}
const $valueChange = ($scope) => (_new_count) => $count($scope, _new_count);
_resumed.c0 = $valueChange;

// template.marko
const $if_content__setup = ($scope) => $setup($scope.a);
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, false);
}));
