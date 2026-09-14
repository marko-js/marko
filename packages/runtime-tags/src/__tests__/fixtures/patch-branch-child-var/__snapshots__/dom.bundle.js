// tags/box.marko
const $root_getter = _el("b0", 0);

// template.marko
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	document.querySelector("main").dataset.tag = $scope.d().tagName;
}));
const $if_content__el = _var_resume("a1", /*@__PURE__*/ _const(3));
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
