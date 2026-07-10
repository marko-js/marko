// template.marko
const $for_content__item_name__OR__open = /*@__PURE__*/ _or(8, ($scope) => _text($scope.c, ("h" in $scope ? $scope.h : false) && $scope.g));
const $for_content__open = /*@__PURE__*/ _let(7, $for_content__item_name__OR__open);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$for_content__open($scope, !("h" in $scope ? $scope.h : false));
}));
const $count = /*@__PURE__*/ _let(11, ($scope) => _text($scope.b, $scope.l));
const $label = /*@__PURE__*/ _let(12, ($scope) => _text($scope.d, $scope.m));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, ("l" in $scope ? $scope.l : 0) + 1);
	});
	_on($scope.c, "click", function() {
		$label($scope, ("m" in $scope ? $scope.m : "none") === "none" ? "some" : "none");
	});
	_on($scope.e, "click", function() {
		$fromInput($scope, $scope.n + ("l" in $scope ? $scope.l : 0));
	});
});
const $fromInput = /*@__PURE__*/ _let(13, ($scope) => _text($scope.f, $scope.n));
