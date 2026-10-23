// tags/child.marko
const $name__script = _script("b0", ($scope) => $signal($scope, 0).onabort = () => console.log(`effect ${$scope.d} destroyed`));
const $setup__script = _script("b1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	console.log(`lifecycle ${$scope.d} destroyed`);
} }));
