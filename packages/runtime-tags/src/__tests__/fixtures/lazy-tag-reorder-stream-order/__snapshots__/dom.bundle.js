// template.marko
_enable_catch();
const $placeholder_content = _content_resume("b0", "loading", "b");

// child.marko
const $input_label__OR__shared__OR__count = /* @__PURE__ */ _or(9, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + $scope.h[$scope.g]);
})), 2);
const $count = /* @__PURE__ */ _let(8, ($scope) => {
	_text($scope.c, $scope.i);
	$input_label__OR__shared__OR__count($scope);
});
