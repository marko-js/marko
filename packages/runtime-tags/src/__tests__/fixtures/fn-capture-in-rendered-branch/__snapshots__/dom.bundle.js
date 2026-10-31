// components/child.marko
const $input_onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));

// template.marko
const $log = ($scope) => () => {
	console.log($scope.d);
};
_resumed.a0 = $log;
