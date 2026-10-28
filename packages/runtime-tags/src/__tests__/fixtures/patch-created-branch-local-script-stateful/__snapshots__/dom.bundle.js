// template.marko
const $if_content__label__script = _script("a0", ($scope) => document.querySelector("main").dataset.label = $scope.a);
const $clicks = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.h + 1);
}));
