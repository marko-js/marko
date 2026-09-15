// template.marko
const $if_content__pick = ($scope, pick) => _text($scope.a, pick()());
const $if_content__mk = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__pick($scope, () => $scope._.f)));
const $if_content__setup = $if_content__mk;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
const $mk = ($scope) => () => $scope.e;
_resume("a0", $mk);
