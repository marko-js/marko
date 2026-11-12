// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>big</p>");
const $count = _let(2, /* @__PURE__ */ _global_or(($scope) => $if($scope, $scope.$.enabled && $scope.c > 1 ? 0 : 1), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("enabled"), "a0")));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
