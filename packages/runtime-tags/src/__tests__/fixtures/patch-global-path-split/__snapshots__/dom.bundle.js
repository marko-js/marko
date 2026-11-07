// template.marko
const $global_o_x__script = _script("a3", ($scope) => $scope.a.append($scope.$.o.x));
const $global_o_x = _fill_global_path("a1", $global_o_x__script, "o", "x");
const $global_o__script = _script("a2", ($scope) => {
	$scope.b.textContent = JSON.stringify($scope.$.o);
	$scope.c.textContent = $scope.$.o.x + JSON.stringify($scope.$.o);
});
const $global_o = _fill_global("a0", $global_o__script, "o");
