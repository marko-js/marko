// tags/panel.marko
const $for_content__count = /*@__PURE__*/ _shell_init("b8", /*@__PURE__*/ _for_closure(4, ($scope) => _text($scope.b, $scope._.k)));
const $if_content__summary = /*@__PURE__*/ _fill_join("b3", 6, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.a, JSON.stringify($scope._.g))));
const $if_content__setup = ($scope) => {
	$if_content__summary._($scope);
	$if_content__pending_length._($scope);
};
const $if_content__pending_length = /*@__PURE__*/ _fill_join("b4", 9, /*@__PURE__*/ _if_closure(3, 0, ($scope) => _text($scope.b, $scope._.j)));
const $count = /*@__PURE__*/ _fill_let("b5", 10, ($scope) => {
	_text($scope.b, $scope.k);
	$for_content__count($scope);
});
const $if = /*@__PURE__*/ _if(3, "<p class=summary> </p><p class=total> </p>", "D lD ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b6", 11, ($scope) => $if($scope, $scope.l ? 0 : 1));
const $setup__script = _script("b2", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.k + 1);
	});
	_on($scope.c, "click", function() {
		$open($scope, !$scope.l);
	});
});
