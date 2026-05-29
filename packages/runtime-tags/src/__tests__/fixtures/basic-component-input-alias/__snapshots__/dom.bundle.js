// total: 2877 (min) 1426 (brotli)
// tags/my-button.marko: 38 (min) 42 (brotli)
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.f));
const $onClick$1 = /* @__PURE__ */ _const(5, $onClick__script);
const $text = ($scope, text) => _text($scope.b, text);

// template.marko: 117 (min) 91 (brotli)
const $clickCount = /* @__PURE__ */ _let(1, ($scope) => {
	$text($scope.a, $scope.b);
	$onClick$1($scope.a, $onClick($scope));
});
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
