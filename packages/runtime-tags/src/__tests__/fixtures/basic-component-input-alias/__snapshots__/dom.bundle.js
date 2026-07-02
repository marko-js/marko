// tags/my-button.marko
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $text = ($scope, text) => _text($scope.b, text);

// template.marko
const $clickCount = /* @__PURE__ */ _let(1, ($scope) => $text($scope.a, $scope.b));
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
