// template.marko
const $doubled = /* @__PURE__ */ _const(6, ($scope) => _text($scope.c, $scope.g));
const $tripled = /* @__PURE__ */ _const(7, ($scope) => _text($scope.d, $scope.h));
const $doubled__OR__tripled = ($scope) => {
	_text($scope.e, $scope.g + $scope.h);
};
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$doubled($scope, $scope.f * 2);
	$tripled($scope, $scope.f * 3);
	$doubled__OR__tripled($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
