// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $try_content__input_content = /*@__PURE__*/ _shell_init("b2", _closure_resume("b3", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__dynamicTag($scope, $scope._.d)))));
const $try_content__input_fail = /*@__PURE__*/ _shell_init("b4", /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e ? boom() : "ok"), 0, "b5"));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_content = /*@__PURE__*/ _fill_join_closure("b7", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b1"), 0);
const $catch_content = _content$1("b6", "<!><!><!>", "b%", $catch_content__input_content);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const(4, $input_fail__closure);

// template.marko
const $wrapper_content__input_label = /*@__PURE__*/ _fill_join_closure("a3", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "a1"), 0);
const $wrapper_content = _content$1("a0", "<em> </em>", "D ", $wrapper_content__input_label);
const $count = /*@__PURE__*/ _fill_let("a4", 6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_fail($scope.c, $scope.g > 0);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
