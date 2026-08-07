// template.marko
const $if_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	document.querySelector("main").dataset.title = $scope._.e;
}));
const $if = /*@__PURE__*/ _if(0, "<button class=read>read</button>", " ", $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
