// template.marko
const $localId = ($scope, localId) => {
	_attr($scope.e, "for", localId);
	_attr($scope.f, "id", localId);
};
const $local = _let(13, ($scope) => $localId($scope, $scope.n || _id($scope, "Jo")));
const $setup__script = _script("a2", ($scope) => _on($scope.g, "click", function() {
	$local($scope, $scope.n ? "" : "given");
}));
