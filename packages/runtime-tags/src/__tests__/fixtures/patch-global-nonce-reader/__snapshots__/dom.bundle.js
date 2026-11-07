// template.marko
const $global_cspNonce__script = _script("a2", ($scope) => {
	$scope.b.textContent = $scope.$.cspNonce;
	$scope.b.dataset.runs = String(+($scope.b.dataset.runs || 0) + 1);
});
const $global_cspNonce = _fill_global("a1", $global_cspNonce__script, "cspNonce");
