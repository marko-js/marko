// tags/panel.marko
const $for_content__count = /*@__PURE__*/ _init_for_closure("b5", 4, ($scope) => _text($scope.b, $scope._.l));
const $if_content__summary = /*@__PURE__*/ _fill_join("b0", 7, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.h))));
const $if_content__setup = ($scope) => {
	$if_content__summary._($scope);
	$if_content__pending_length._($scope);
};
const $if_content__pending_length = /*@__PURE__*/ _fill_join("b1", 10, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.b, $scope._.k)));
const $count = /*@__PURE__*/ _fill_let("b2", 11, ($scope) => {
	_text($scope.b, $scope.l);
	$for_content__count($scope);
});
const $if = /*@__PURE__*/ _if(3, "<p class=summary> </p><p class=total> </p>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b3", 12, ($scope) => $if($scope, $scope.m ? 0 : 1));
const $setup__script = _script("b2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.l + 1);
	});
	_on($scope.c, "click", function() {
		$open($scope, !$scope.m);
	});
});
