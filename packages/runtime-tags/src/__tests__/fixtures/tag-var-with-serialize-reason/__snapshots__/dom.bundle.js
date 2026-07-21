// tags/child.marko
const $if = /*@__PURE__*/ _if(0, "<span></span>", "b");
const $input_value = ($scope, input_value) => $if($scope, input_value ? 0 : 1);

// template.marko
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.e));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$count__render($scope);
	$input_value($scope.c, $scope.e);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $x = _var_resume("a0", ($scope, x) => {});
