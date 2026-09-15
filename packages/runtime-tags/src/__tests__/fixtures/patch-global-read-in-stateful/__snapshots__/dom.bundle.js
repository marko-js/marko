// template.marko
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", /* @__PURE__ */ _global_join("brand", "a0", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope.$.brand))));
const $on = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
