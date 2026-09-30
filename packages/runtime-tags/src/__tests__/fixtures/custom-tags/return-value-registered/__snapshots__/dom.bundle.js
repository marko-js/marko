// tags/getter.marko
function $getter() {
	return "hello";
}
_resumed.b0 = $getter;

// template.marko
const $get__script = _script("a0", ($scope) => $scope.c.textContent = $scope.d());
