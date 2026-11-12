// template.marko
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", /* @__PURE__ */ _global_if("a0", /* @__PURE__ */ _global_key(4, "brand"), 0, 0, ($scope) => _text($scope.a, $scope.$.brand)));
const $count = _let(2, ($scope) => $if($scope, $scope.c > 1 ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
