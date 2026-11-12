// template.marko
const $global_cspNonce_key = /*@__PURE__*/ _global_key(4, "cspNonce");
const $global_cspNonce__script = _script("a1", ($scope) => {
	$global_cspNonce.r($scope);
	$scope.b.textContent = $scope.$.cspNonce;
	$scope.b.dataset.runs = String(+($scope.b.dataset.runs || 0) + 1);
});
const $global_cspNonce = /*@__PURE__*/ _global_closure("a3", $global_cspNonce_key, $global_cspNonce__script);
