// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
	document.title = JSON.stringify($scope.h);
}));

// child.marko
const $if = /*@__PURE__*/ _if(1, "<i>open</i>");
const $open = /*@__PURE__*/ _fill_let("a0", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
	document.body.dataset.item = JSON.stringify($scope.e);
}));
