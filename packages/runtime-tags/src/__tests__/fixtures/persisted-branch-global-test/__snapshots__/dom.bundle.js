// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>big</p>");
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _global_join("enabled", "a0", ($scope) => {
	$if($scope, $scope.$.enabled && $scope.c > 1 ? 0 : 1);
}));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
