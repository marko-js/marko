// template.marko
const $if_content__input_color = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _style_rule_item($scope.a, "--M_a0", $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__input_color._($scope);
	_style_shell($scope, "a");
};
const $if = /*@__PURE__*/ _if(1, "<style></style><div class=content>Hello</div>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
