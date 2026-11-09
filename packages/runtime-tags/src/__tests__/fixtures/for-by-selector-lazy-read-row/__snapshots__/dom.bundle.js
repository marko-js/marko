// template.marko
function track(name, value) {
	console.log("eval " + name);
	return value;
}
const $for_content__selected__script = _script("a1", ($scope) => _on($scope.a, "click", track("h", $scope._.d === $scope.M) ? void 0 : () => {
	$selected($scope._, $scope.M);
	$log($scope._, `${$scope._.e}[${$scope.d.name}]`);
}));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 3, $for_content__selected__script);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$log($scope._, JSON.stringify($scope.d));
}));
const $selected = /*@__PURE__*/ _let(3, $for_content__selected);
const $log = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
