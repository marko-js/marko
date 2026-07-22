// tags/my-button.marko
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $text__render = /*@__PURE__*/ _render(($scope, text) => _text($scope.b, text));
const $text = ($scope, text) => {
	$text__render($scope, text);
	$input_text($scope, text);
};
const $input_text = /*@__PURE__*/ _render(($scope, text) => _text($scope.c, text));

// template.marko
const $clickCount = /*@__PURE__*/ _let(1, ($scope) => $text($scope.a, $scope.b));
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
