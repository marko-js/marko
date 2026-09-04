// template.marko
const $if_content__input_color = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _style_rule_item($scope.a, "--M_a0", $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	$if_content__input_x._($scope);
	_style_shell($scope, "a");
};
const $if_content__input_x = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, "<style></style><b class=x> </b>", " D ", $if_content__setup);
const $s = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$s($scope, !$scope.g);
}));
