// template.marko
const $if_content__label__script = _script("a1", ($scope) => document.querySelector("main").dataset.label = $scope.a);
const $clicks = /*@__PURE__*/ _fill_let("a4", 7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.h + 1);
}));
