// tags/panel.marko
const $if_content2__f = /*@__PURE__*/ _init_resume("b2", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.b())));
const $if_content2__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$out($scope._._, $scope._.b());
}));
const $if_content2__setup = ($scope) => {
	$if_content2__f._($scope);
	$if_content2__setup__script($scope);
};
const $if_content__if = /*@__PURE__*/ _if(0, "<button class=read> </button>", " D ", $if_content2__setup);
const $if_content__input_y = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _fill_join("b8", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.g ? 0 : 1))));
const $out = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $input_y = /*@__PURE__*/ _fill_const("b8", 6, $if_content__input_y);
const $f = ($scope) => function() {
	return $scope._.f;
};
_bind_resume("b0 >f", $f);

// template.marko
const $y = /*@__PURE__*/ _let(6, ($scope) => $input_y($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$y($scope, !$scope.g);
}));
