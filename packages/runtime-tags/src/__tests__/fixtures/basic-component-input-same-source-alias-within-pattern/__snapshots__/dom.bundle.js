// tags/my-button.marko
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $text = ($scope, text) => {
	_text($scope.b, text);
	$input_value_text($scope, text);
};
const $input_value_text = ($scope, text) => _text($scope.c, text);
const $value2 = ($scope, $value) => $text($scope, $value.text);

// template.marko
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
	$value2($scope.a, { text: $scope.c });
	$text($scope.b, $scope.c);
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
