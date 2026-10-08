// tags/panel.marko
const $for_content__count = _shell_for_closure("b8", 4, ($scope) => _text($scope.b, $scope._.m));
const $if_content__summary = /*@__PURE__*/ _fill_join("b3", 8, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.i))));
const $if_content__setup = ($scope) => {
	$if_content__summary._($scope);
	$if_content__pending_length._($scope);
};
const $if_content__pending_length = /*@__PURE__*/ _fill_join("b4", 11, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.b, $scope._.l)));
const $count = /*@__PURE__*/ _fill_let("b5", 12, ($scope) => {
	_text($scope.b, $scope.m);
	$for_content__count($scope);
});
const $if = /*@__PURE__*/ _if(3, "<p class=summary> </p><p class=total> </p>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b6", 13, ($scope) => $if($scope, $scope.n ? 0 : 1));
const $setup__script = _script("b2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.m + 1);
	});
	_on($scope.c, "click", function() {
		$open($scope, !$scope.n);
	});
});
