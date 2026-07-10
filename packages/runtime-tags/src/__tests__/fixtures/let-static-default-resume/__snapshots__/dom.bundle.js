// template.marko
const $for_content__item_name__OR__open = /*@__PURE__*/ _or(8, ($scope) => _text($scope.c, $scope.h && $scope.g));
const $for_content__open = /*@__PURE__*/ _let(7, $for_content__item_name__OR__open);
const $for_content__setup__script = _script("a0", ($scope) => {
	$scope.h ??= false;
	_on($scope.a, "click", function() {
		$for_content__open($scope, !$scope.h);
	});
});
const $count = /*@__PURE__*/ _let(11, ($scope) => _text($scope.b, $scope.l));
const $label = /*@__PURE__*/ _let(12, ($scope) => _text($scope.d, $scope.m));
const $setup__script = _script("a1", ($scope) => {
	$scope.l ??= 0;
	$scope.m ??= "none";
	_on($scope.a, "click", function() {
		$count($scope, $scope.l + 1);
	});
	_on($scope.c, "click", function() {
		$label($scope, $scope.m === "none" ? "some" : "none");
	});
	_on($scope.e, "click", function() {
		$fromInput($scope, $scope.n + $scope.l);
	});
});
const $fromInput = /*@__PURE__*/ _let(13, ($scope) => _text($scope.f, $scope.n));
