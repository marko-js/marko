// tags/getter.marko
function $getter() {
	return "hello";
}
_resume("b0", $getter);

// template.marko
const $get = _var_resume("a0", /*@__PURE__*/ _const(3, _script("a1", ($scope) => $scope.c.textContent = $scope.d())));
