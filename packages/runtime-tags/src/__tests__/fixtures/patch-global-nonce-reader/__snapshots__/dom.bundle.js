// template.marko
const $setup__$global_cspNonce = _fill_global_script("a0", ($scope) => {
	$scope.b.textContent = $scope.$.cspNonce;
	$scope.b.dataset.runs = String(+($scope.b.dataset.runs || 0) + 1);
}, "cspNonce");
