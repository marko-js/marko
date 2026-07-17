// template.marko
const $apply_pending = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, String($scope.e)));
const $status = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", () => $scope.d(resolveAfter("done")).then((value) => $status($scope, value))));
function $value($scope) {
	return _action($scope, 3, $apply_pending, (act) => act);
}
_resume("a0", $value);
