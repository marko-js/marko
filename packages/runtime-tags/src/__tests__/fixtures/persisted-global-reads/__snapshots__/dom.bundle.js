// template.marko
const $count__OR__$global_params_tag = /* @__PURE__ */ _or(11, ($scope) => _attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot"));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	$count__OR__$global_params_tag($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
