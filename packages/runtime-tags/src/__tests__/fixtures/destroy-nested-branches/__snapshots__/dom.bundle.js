// tags/child.marko
const $name__script = _script("b0", ($scope) => {
	_lifecycle($scope, { onDestroy: function() {
		console.log(`lifecycle ${$scope.d} destroyed`);
	} });
	$signal($scope, 0).onabort = () => console.log(`effect ${$scope.d} destroyed`);
});
