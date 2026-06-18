// tags/my-box.marko
const $captured = /* @__PURE__ */ _let(6, ($scope) => _text($scope.c, $scope.g));
const $input__script = _script("b1", ($scope) => _attrs_script($scope, "a"));
const $input_content = /* @__PURE__ */ _const(5, _script("b0", ($scope) => _on($scope.b, "click", function() {
	$captured($scope, $scope.f ? "has-content" : "no-content");
})));

// template.marko
const $mybox_content = _content_resume("a0", "Hello", "b");
