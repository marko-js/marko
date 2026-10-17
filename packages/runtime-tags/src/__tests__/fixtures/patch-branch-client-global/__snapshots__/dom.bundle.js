// template.marko
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", /* @__PURE__ */ _fill_global_join("brand", "a0", ($scope) => _text($scope.a, $scope.$.brand)));
const $count = /*@__PURE__*/ _fill_let("a2", 2, ($scope) => $if($scope, $scope.c > 1 ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
