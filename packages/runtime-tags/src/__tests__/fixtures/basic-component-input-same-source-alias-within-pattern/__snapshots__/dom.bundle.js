// total: 2763 (min) 1405 (brotli)
// tags/my-button.marko: 38 (min) 42 (brotli)
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $onClick$1 = /* @__PURE__ */ _const(5, $onClick__script);
const $text = ($scope, text) => {
	_text($scope.b, text);
	$input_value_text($scope, text);
};
const $input_value_text = ($scope, text) => _text($scope.c, text);
const $value2 = ($scope, $value) => $text($scope, $value.text);

// template.marko: 222 (min) 129 (brotli)
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
	$value2($scope.a, { text: $scope.c });
	$onClick$1($scope.a, $onClick($scope));
	$text($scope.b, $scope.c);
	$onClick$1($scope.b, $onClick2($scope));
});
function $onClick2($scope) {
	return function() {
		$clickCount($scope, $scope.c + 1);
	};
}
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.c + 1);
	};
}
_resume("a1", $onClick2);
_resume("a0", $onClick);
