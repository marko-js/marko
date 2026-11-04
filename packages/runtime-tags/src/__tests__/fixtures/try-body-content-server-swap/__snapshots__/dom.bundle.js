// tags/wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e ? boom() : "ok"), 0, "b2");
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b0");
const $catch_content = _content("b3", "<!><!><!>", "b%", $catch_content__input_content);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const(4, $input_fail__closure);

// template.marko
const $B_content__input_label = /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a3");
const $B_content = _content("a2", "<i>B <!></i>", "Db%", $B_content__input_label);
const $A_content__input_label = /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a1");
const $A_content = _content("a0", "<em>A <!></em>", "Db%", $A_content__input_label);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_fail($scope.c, $scope.h > 1);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
