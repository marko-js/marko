// template.marko
const $live = /*@__PURE__*/ _const(2, _script("a1", ($scope) => _lifecycle($scope, { onMount: function() {
	document.addEventListener("keydown", () => console.log("key", $scope.c.open));
} })));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.c.open = true;
		console.log("click", $scope.c.open);
	});
	_on($scope.b, "click", function() {
		console.log("read", $scope.c.open);
	});
});
