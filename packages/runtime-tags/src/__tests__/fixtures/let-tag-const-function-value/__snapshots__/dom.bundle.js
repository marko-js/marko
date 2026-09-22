// template.marko
const $x = /*@__PURE__*/ _let(2, _script("a1", ($scope) => {
	document.getElementById("out").textContent = $scope.c();
}));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$x($scope, () => "b");
}));
function $fn() {
	return "a";
}
_resumed.a0 = $fn;
