// tags/inner.marko
const $input__script = _script("b0", ($scope) => $scope.a.textContent = $scope.c.fn());

// tags/outer.marko
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {}));
const $fn = ($scope) => function() {
	return $scope.g;
};
_resumed.c0 = $fn;
