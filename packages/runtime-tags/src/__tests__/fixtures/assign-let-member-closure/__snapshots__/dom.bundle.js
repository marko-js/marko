// template.marko
const $live__script = _script("a1", ($scope) => _lifecycle($scope, { onMount: function() {
	document.addEventListener("keydown", () => console.log("key", $scope.d?.open));
} }));
const $live = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.a, $scope.d?.open ? "open" : "closed");
	$live__script($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$scope.d.open = true;
	});
	_on($scope.c, "click", function() {
		$live($scope, { ...$scope.d });
	});
});
