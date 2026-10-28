// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _init_resume("b3", /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e ? boom() : "ok"), 0, "b4"));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_content = /*@__PURE__*/ _fill_closure("b7", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b0"), 0);
const $catch_content = _content$1("b5", "<!><!><!>", "b%", $catch_content__input_content);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const(4, $input_fail__closure);

// template.marko
const $if_content__count = /*@__PURE__*/ _init_resume("a14", /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_fail($scope.a, $scope._.i > 1)));
const $B_content__input_label = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _fill_closure("a9", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a5"), 1));
const $B_content = _content$1("a3", "<i>B <!></i>", "Db%", $B_content__input_label);
const $A_content__input_label = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a9", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a2"), 0));
const $A_content = _content$1("a0", "<em>A <!></em>", "Db%", $A_content__input_label);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$if_content__count($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
