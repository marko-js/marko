// tags/log-count.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	console.log($scope.e());
}));

// template.marko
const $count = ($scope) => () => `${$scope.f} of ${$scope.e}`;
_resumed.a0 = $count;
