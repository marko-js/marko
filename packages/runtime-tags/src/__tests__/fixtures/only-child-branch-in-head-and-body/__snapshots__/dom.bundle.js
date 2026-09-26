// template.marko
const $if = /*@__PURE__*/ _if(1, "<button>hide</button>", " ", _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope._, false);
})));
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
