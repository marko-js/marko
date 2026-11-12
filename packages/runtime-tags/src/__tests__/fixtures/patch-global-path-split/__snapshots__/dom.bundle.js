// template.marko
const $global_o_x_key = /*@__PURE__*/ _global_key(5, "o", "x");
const $global_o_x__script = _script("a1", ($scope) => {
	$global_o_x.r($scope);
	$scope.a.append($scope.$.o.x);
});
const $global_o_x = /*@__PURE__*/ _global_closure("a3", $global_o_x_key, $global_o_x__script);
const $global_o_key = /*@__PURE__*/ _global_key(4, "o");
const $global_o__script = _script("a0", ($scope) => {
	$global_o.r($scope);
	$scope.b.textContent = JSON.stringify($scope.$.o);
	$scope.c.textContent = $scope.$.o.x + JSON.stringify($scope.$.o);
});
const $global_o = /*@__PURE__*/ _global_closure("a4", $global_o_key, $global_o__script);
