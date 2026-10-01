// template.marko
const $for_content__setup = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$last($scope._, $scope.c());
}));
const $last = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
function $of2() {
	return "b";
}
function $of() {
	return "a";
}
_resumed.a1 = $of2;
_resumed.a0 = $of;
