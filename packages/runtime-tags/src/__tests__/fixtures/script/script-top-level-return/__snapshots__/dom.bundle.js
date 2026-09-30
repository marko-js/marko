// template.marko
const $x__script = _script("a0", ($scope) => {
	(() => {
		if ($scope.a) return;
		console.log("first: " + $scope.a);
	})();
	console.log("second: " + $scope.a);
});
