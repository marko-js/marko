// tags/child.marko
const $name__script = _script("b0", ($scope) => {
	_lifecycle($scope, { onDestroy: function() {
		console.log(`lifecycle ${$scope.d} destroyed`);
	} });
	onAbort($scope, 0, () => console.log(`effect ${$scope.d} destroyed`));
});
