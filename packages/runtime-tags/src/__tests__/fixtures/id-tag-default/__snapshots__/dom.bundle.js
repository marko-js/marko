// total: 2931 (min) 1491 (brotli)
// template.marko: 233 (min) 155 (brotli)
const $sometimesBar = ($scope, sometimesBar) => _attr($scope.c, "id", sometimesBar);
const $bar__OR__baz__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$bar($scope, $scope.e ? null : "bar");
	$baz($scope, $scope.f ? null : "baz");
}));
const $bar__OR__baz = /* @__PURE__ */ _or(6, $bar__OR__baz__script);
const $bar = /* @__PURE__ */ _let(4, ($scope) => {
	$sometimesBar($scope, $scope.e || _id($scope));
	$bar__OR__baz($scope);
});
const $sometimesBaz = ($scope, sometimesBaz) => _attr($scope.d, "id", sometimesBaz);
const $baz = /* @__PURE__ */ _let(5, ($scope) => {
	$sometimesBaz($scope, $scope.f || _id($scope));
	$bar__OR__baz($scope);
});
