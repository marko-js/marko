// template.marko
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $for_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.d ? 0 : 1), 5);
const $for_content__setup = $for_content__show;
const $show = /*@__PURE__*/ _let(3, $for_content__show);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$show($scope, !$scope.d);
	});
	_on($scope.c, "click", function() {
		$items($scope, [...$scope.e, "c"]);
	});
});
