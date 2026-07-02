// template.marko
const $input_a__OR__n = /* @__PURE__ */ _or(7, ($scope) => _text_content($scope.c, `${_to_text($scope.f)} - ${_to_text($scope.g)}`));
const $n = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_a__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
