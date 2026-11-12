// template.marko
const $global_cspNonce__script = _global_script("a1", ($scope) => {
	$scope.b.textContent = $scope.$.cspNonce;
	$scope.b.dataset.runs = String(+($scope.b.dataset.runs || 0) + 1);
}, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("cspNonce")));
