// template.marko
_enable_catch();
const $placeholder_content = _content_resume("b0", "loading", "b");

// child.marko
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.c, $scope.i));
const $input_label__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + $scope.h[$scope.g]);
}));
