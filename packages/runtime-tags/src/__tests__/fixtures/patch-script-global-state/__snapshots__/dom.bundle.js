// template.marko
const $count__$global_brand__script = _fill_global_script("a0", ($scope) => $scope.a.dataset.log = ($scope.a.dataset.log || "") + "[" + $scope.c + $scope.$.brand + "]", "brand");
const $count = _let(2, /* @__PURE__ */ _fill_global("a0", ($scope) => {
	_text($scope.b, $scope.c + $scope.$.brand);
	$count__$global_brand__script($scope);
}, "brand"));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
