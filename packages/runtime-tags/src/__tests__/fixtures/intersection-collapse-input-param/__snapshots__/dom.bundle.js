// tags/child.marko
const $doubled__OR__tripled = ($scope) => {
	_text($scope.a, $scope.d * 2 + $scope.d * 3);
};
const $input_n = /* @__PURE__ */ _const(3, $doubled__OR__tripled);

// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.c + 1);
}));
const $n = /* @__PURE__ */ _let(2, ($scope) => {
	$input_n($scope.a, $scope.c);
	$n__script($scope);
});
