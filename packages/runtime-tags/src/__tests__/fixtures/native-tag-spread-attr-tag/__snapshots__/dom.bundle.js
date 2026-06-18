// tags/my-box.marko
const $input_head__script = _script("b1", ($scope) => _attrs_script($scope, "a"));
const $input_foot__script = _script("b0", ($scope) => _attrs_script($scope, "b"));

// template.marko
const $head_content__n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$head_content__n($scope, $scope.c + 1);
}));
const $head_content__n = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$head_content__n__script($scope);
});
