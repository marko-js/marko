// tags/child.marko
const $input__script = _script("b0", ($scope) => $scope.a.innerHTML = $scope.c.y());

// tags/source.marko
function $_return() {
	return 1;
}
_resume("c0", $_return);

// template.marko
const $x_getter = _hoist_resume("a0", 3);
const $x = _var_resume("a1", /*@__PURE__*/ _const(3));
