// template.marko
const $promise = /* @__PURE__ */ _const(4, _script("a2", ($scope) => (async () => {
	document.getElementById("ref").textContent = String((await $scope.e)());
})()));
const $getCount2 = ($scope, getCount) => $promise($scope, Promise.resolve(getCount));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$getCount2($scope, $getCount($scope));
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
function $getCount($scope) {
	return () => $scope.c;
}
_resume("a0", $getCount);
