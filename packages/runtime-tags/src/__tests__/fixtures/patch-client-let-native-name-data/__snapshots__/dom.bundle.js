// tags/outer.marko
const $T_content__input_label = /*@__PURE__*/ _fill_join_closure("b2", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._.e), 0, "b1"), 0);
const $T_content__setup = ($scope) => {
	$T_content__input_label($scope);
	$T_content__T($scope);
};
const $T_content__T = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f));
const $T_content = _content("b0", "<!>:<!>", "%c%", $T_content__setup);
_content_resume($T_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $T_content);
const $T__closure = /*@__PURE__*/ _closure($T_content__T);
const $T = fill("b3", /*@__PURE__*/ _let(5, ($scope) => {
	$dynamicTag($scope, $scope.f, ($_) => ({ title: $scope.f }));
	$T__closure($scope);
}));
