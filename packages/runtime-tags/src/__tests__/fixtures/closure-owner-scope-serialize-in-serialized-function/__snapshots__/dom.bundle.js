// template.marko
const $if_content__run = /*@__PURE__*/ _const(1, _script("a2", ($scope) => $scope.b()));
const $run = ($scope) => function() {
	$scope.a.innerHTML = $scope._.b();
};
function $text() {
	return "HI";
}
_resume("a1", $run);
_resume("a0", $text);
