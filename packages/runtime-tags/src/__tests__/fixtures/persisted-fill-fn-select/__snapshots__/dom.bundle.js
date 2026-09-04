// template.marko
const $if_content__pick = /*@__PURE__*/ _fill_join("a0", 9, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.j())));
const $if_content__setup = $if_content__pick;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.k);
}));
const $up = ($scope) => () => "U" + $scope.e;
const $low = ($scope) => () => "l" + $scope.e;
_resume("a0", $up);
_resume("a1", $low);
