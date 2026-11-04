// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<b> </b>", "D ", $for_content__setup);
const $if_content__setup = ($scope) => $if_content__for($scope, [[{ id: 1 }, { id: 2 }], "id"]);
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup, "none");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
