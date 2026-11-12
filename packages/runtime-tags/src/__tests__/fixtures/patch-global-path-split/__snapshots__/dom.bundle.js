// template.marko
const $global_o_x = _fill_global_path_script("a1", ($scope) => $scope.a.append($scope.$.o.x), "o", "x");
const $global_o = _fill_global_script("a0", ($scope) => {
	$scope.b.textContent = JSON.stringify($scope.$.o);
	$scope.c.textContent = $scope.$.o.x + JSON.stringify($scope.$.o);
}, "o");
