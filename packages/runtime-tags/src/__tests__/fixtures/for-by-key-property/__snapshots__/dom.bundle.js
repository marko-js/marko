// template.marko
const $if_content__setup = ($scope) => _text($scope.a, $scope._.M.length);
const $for_content__if = /*@__PURE__*/ _if(3, "<span> </span>", "D ", $if_content__setup);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope._, [...$scope._.b, { id: "cde" }]);
}));
const $for_content__setup = ($scope) => {
	_text($scope.c, $scope.M.length);
	_text($scope.b, $scope.M);
	$for_content__if($scope, $scope.M ? 0 : 1);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of(0, "<button><!>:<!><!></button>", " D%c%b%", $for_content__setup);
const $rows = /*@__PURE__*/ _let(1, ($scope) => $for($scope, [$scope.b, "id"]));
