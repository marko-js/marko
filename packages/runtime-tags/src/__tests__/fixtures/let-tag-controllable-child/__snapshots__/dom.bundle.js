// tags/child.marko
const $state = /* @__PURE__ */ _let_change(14, ($scope) => _text($scope.c, $scope.o));
const $thirdState = /* @__PURE__ */ _let_change(16, ($scope) => _text($scope.i, $scope.q));
const $input_value__OR__input_valueChange = /* @__PURE__ */ _or(13, ($scope) => {
	$state($scope, $scope.l, $scope.m);
	$thirdState($scope, $scope.l, $scope.m);
});
const $input_value = /* @__PURE__ */ _const(11, ($scope) => {
	_text($scope.b, $scope.l);
	_text($scope.e, $scope.l);
	_text($scope.h, $scope.l);
	$input_value__OR__input_valueChange($scope);
});
const $input_valueChange = /* @__PURE__ */ _const(12, $input_value__OR__input_valueChange);
const $setup__script = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$state($scope, $scope.o + 1);
	});
	_on($scope.d, "click", function() {
		$otherState($scope, $scope.p + 1);
	});
	_on($scope.g, "click", function() {
		$thirdState($scope, $scope.q + 1);
	});
});
const $otherState = /* @__PURE__ */ _let_change(15, ($scope) => _text($scope.f, $scope.p));
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
	$otherState($scope, input["value"], input["valueChange"]);
};

// template.marko
const $source = /* @__PURE__ */ _let(2, ($scope) => {
	$input($scope.a, {
		value: $scope.c,
		valueChange: $valueChange($scope)
	});
	_text($scope.b, $scope.c);
});
function $valueChange($scope) {
	return (_new_source) => {
		$source($scope, _new_source);
	};
}
_resume("a0", $valueChange);
