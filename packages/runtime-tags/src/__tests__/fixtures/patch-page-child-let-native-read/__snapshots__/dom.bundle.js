// tags/outer.marko
const $if_content__T = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.h)));
const $T_content__input_label = /*@__PURE__*/ _fill_join_closure("b3", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.f), 0, "b1"), 0);
const $T_content__setup = ($scope) => {
	$T_content__input_label($scope);
	$T_content__T($scope);
};
const $T_content__T = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h));
const $T_content = _content$1("b0", "<!>:<!>", "%c%", $T_content__setup);
_content_resume($T_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $T_content);
const $T__closure = /*@__PURE__*/ _closure($T_content__T);
const $T = fill("b4", /*@__PURE__*/ _let(7, ($scope) => {
	$dynamicTag($scope, $scope.h, ($_) => ({ title: $scope.h }));
	$T__closure($scope);
	$if_content__T($scope);
}));
