// tags/wrapper.marko
function boom$1() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail$1 = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e ? boom$1() : "ok"), 0, "c2");
const $catch_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_fallback$1 = /*@__PURE__*/ _fill_join_closure("c4", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag$1($scope, $scope._.d), 0, "c1"), 0);
const $catch_content$1 = _content$1("c3", "<!><!><!>", "b%", $catch_content__input_fallback$1);
const $input_fail__closure$1 = /*@__PURE__*/ _closure($try_content__input_fail$1);
const $input_fail$1 = /*@__PURE__*/ _const(4, $input_fail__closure$1);

// tags/error-wrapper.marko
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e ? boom() : "ok"), 0, "b2");
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $catch_content__input_fallback = /*@__PURE__*/ _fill_join_closure("b4", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b1"), 0);
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b3", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const(4, $input_fail__closure);

// template.marko
const $fallback_content2__input_label = /*@__PURE__*/ _fill_join_closure("a5", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a2"), 1);
const $fallback_content2 = _content$1("a3", "<i> </i>", "D ", $fallback_content2__input_label);
const $fallback_content__input_label = /*@__PURE__*/ _fill_join_closure("a5", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a0"), 0);
const $fallback_content = _content$1("a1", "<em> </em>", "D ", $fallback_content__input_label);
const $count = /*@__PURE__*/ _fill_let("a6", 7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_fail$1($scope.c, $scope.h > 1);
	$input_fail($scope.d, $scope.h > 1);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
