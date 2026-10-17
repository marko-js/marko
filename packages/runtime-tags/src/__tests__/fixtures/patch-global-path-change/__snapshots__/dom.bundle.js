// template.marko
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", /* @__PURE__ */ _fill_global_path_join("o", "a0", ($scope) => _text($scope.a, $scope.$.o.x), ["x"]));
const $open = /*@__PURE__*/ _fill_let("a3", 3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__$global_o_x__OR__$global_k = _fill_global_path_script("a1", ($scope) => $scope.c.textContent = $scope.$.o.x + $scope.$.k, { o: [["x"]] }, "k");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.d);
}));
