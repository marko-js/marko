// template.marko
const $opts__script = _script("a0", ($scope) => {
	if ($scope.e) {
		$scope.e.seen = true;
		$scope.a.textContent = JSON.stringify($scope.e);
	}
});
