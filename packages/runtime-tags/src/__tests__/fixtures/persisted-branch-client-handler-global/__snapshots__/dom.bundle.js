// template.marko
const $if_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	document.querySelector("main").dataset.title = $scope._.c;
}));
const $if = /*@__PURE__*/ _if(0, "<button class=read>read</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
