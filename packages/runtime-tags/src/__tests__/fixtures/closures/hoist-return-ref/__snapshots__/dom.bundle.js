// tags/child.marko
const $input__script = _script("b0", ($scope) => $scope.a.innerHTML = $scope.c.y());

// tags/source.marko
function $_return() {
	return 1;
}
_resumed.c0 = $_return;

// template.marko
const $x_getter = _hoist_resume("a0", 3);
