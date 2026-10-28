// tags/wrapper.marko
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $try_content__input_content = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__dynamicTag($scope, $scope._.d), 0, "b2")));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_content = /*@__PURE__*/ _fill_closure("b7", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b0"), 0);
const $catch_content = _content$1("b5", "<!><!><!>", "b%", $catch_content__input_content);
const $input_content__closure = /*@__PURE__*/ _closure($catch_content__input_content, $try_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("b7", 3, $input_content__closure);

// template.marko
const $B_content__input_label = /*@__PURE__*/ _fill_closure("a5", 5, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.f), 0, "a3"), 1);
const $B_content = _content$1("a2", "<i>B <!></i>", "Db%", $B_content__input_label);
const $A_content__input_label = /*@__PURE__*/ _fill_closure("a5", 5, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.f), 0, "a1"), 0);
const $A_content = _content$1("a0", "<em>A <!></em>", "Db%", $A_content__input_label);
const $alt__OR__A__OR__B = /*@__PURE__*/ _or(9, ($scope) => $input_content($scope.c, $scope.g ? $scope.h : $scope.i), 2);
const $alt = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g ? "A" : "B");
	$alt__OR__A__OR__B($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$alt($scope, !$scope.g);
}));
