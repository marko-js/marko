// tags/my-box.marko
const $captured = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$captured($scope, $scope.f ? "has-content" : "no-content");
}));
const $input__script = _script("b1", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $mybox_content = _content_resume("a0", "Hello", "b");
