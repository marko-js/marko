// template.marko
const $x = /*@__PURE__*/ _let(0, _script("a0", ($scope) => {
	(() => {
		if ($scope.a) return;
		console.log("first: " + $scope.a);
	})();
	console.log("second: " + $scope.a);
}));
