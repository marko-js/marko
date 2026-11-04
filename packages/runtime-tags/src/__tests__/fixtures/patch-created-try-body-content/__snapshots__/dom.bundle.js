// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _closure_get_patch("b2", 6, ($scope) => _text($scope.a, $scope._.e ? boom() : "ok"));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_content = /*@__PURE__*/ _closure_get_patch("b0", 5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b5", 0);
const $catch_content = _content$1("b3", "<!><!><!>", "b%", $catch_content__input_content);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const(4, $input_fail__closure);

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a12", 2, 0, ($scope) => $input_fail($scope.a, $scope._.i > 1));
const $B_content__input_label = /*@__PURE__*/ _closure_get_patch("a3", 11, ($scope) => _text($scope.a, $scope._.f), 0, "a7", 1);
const $B_content = _content$1("a2", "<i>B <!></i>", "Db%", $B_content__input_label);
const $A_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 11, ($scope) => _text($scope.a, $scope._.f), 0, "a7", 0);
const $A_content = _content$1("a0", "<em>A <!></em>", "Db%", $A_content__input_label);
const $count = _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$if_content__count($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
