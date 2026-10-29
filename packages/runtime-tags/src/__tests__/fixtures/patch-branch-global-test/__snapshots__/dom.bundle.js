// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>big</p>");
const $count = _let(2, /* @__PURE__ */ _fill_global("a0", ($scope) => $if($scope, $scope.$.enabled && $scope.c > 1 ? 0 : 1), "enabled"));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
