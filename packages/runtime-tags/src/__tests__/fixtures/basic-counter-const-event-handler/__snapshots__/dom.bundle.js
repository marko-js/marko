// template.marko
const $increment2 = /* @__PURE__ */ _const(3, _script("a1", ($scope) => _on($scope.a, "click", $scope.d)));
const $clickCount = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$increment2($scope, $increment($scope));
});
function $increment($scope) {
	return function() {
		$clickCount($scope, $scope.c + 1);
	};
}
_resume("a0", $increment);
