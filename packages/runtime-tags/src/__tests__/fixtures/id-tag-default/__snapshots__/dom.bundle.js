// template.marko
const $sometimesBar = ($scope, sometimesBar) => _attr($scope.c, "id", sometimesBar);
const $bar = /* @__PURE__ */ _let(4, ($scope) => $sometimesBar($scope, $scope.e || _id($scope)));
const $sometimesBaz = ($scope, sometimesBaz) => _attr($scope.d, "id", sometimesBaz);
const $baz = /* @__PURE__ */ _let(5, ($scope) => $sometimesBaz($scope, $scope.f || _id($scope)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$bar($scope, $scope.e ? null : "bar");
	$baz($scope, $scope.f ? null : "baz");
}));
