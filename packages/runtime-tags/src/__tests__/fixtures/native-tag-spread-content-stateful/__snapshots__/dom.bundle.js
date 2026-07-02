// tags/my-box.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));

// template.marko
const $mybox_content__count = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
const $mybox_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mybox_content__count($scope, $scope.c + 1);
}));
