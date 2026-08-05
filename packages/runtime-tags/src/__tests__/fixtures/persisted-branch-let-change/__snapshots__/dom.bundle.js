// template.marko
const $if_content__count = /*@__PURE__*/ _fill_let_change("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, $scope.c + 1);
}));
function $valueChange(next) {
	document.querySelector("main").dataset.attempt = String(next);
}
_resume("a0", $valueChange);
