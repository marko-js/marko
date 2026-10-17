// tags/child.marko
const $template = "<span> </span>";
const $setup__script$1 = _script("b3", ($scope) => console.log("setup"));
const $setup = $setup__script$1;
const $input_message__script = _script("b2", ($scope) => console.log("message", $scope.d));
const $input_message = /*@__PURE__*/ _const(3, ($scope) => {
	$input_message__script($scope);
	_text($scope.a, $scope.d);
});
const $input_label__script = _script("b1", ($scope) => console.log("label", $scope.e));
const $input_label = /*@__PURE__*/ _const(4, $input_label__script);
const $input_count__script = _script("b0", ($scope) => console.log("count", $scope.f));
const $input_count = /*@__PURE__*/ _const(5, $input_count__script);

// template.marko
function boom(msg) {
	throw new Error(msg);
}
const $try_content__input_msg__OR__input_fail = /*@__PURE__*/ _fill_join_subscribers("a7", 5, /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.g ? boom($scope._.f) : $scope._.f)), 8, 1);
const $try_content__input_msg = _closure_resume("a3", /*@__PURE__*/ _closure_get(8, $try_content__input_msg__OR__input_fail));
const $catch_content__input_msg = /*@__PURE__*/ _fill_join_closure("a7", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $input_label($scope.a, $scope._.f), 0, "a1"), 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_msg($scope);
	$catch_content__count($scope);
	$setup($scope.a);
};
const $catch_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => $input_count($scope.a, $scope._.h), 0, "a2");
const $catch_content__err_message = ($scope, err_message) => $input_message($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _fill_let("a8", 7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__closure($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
