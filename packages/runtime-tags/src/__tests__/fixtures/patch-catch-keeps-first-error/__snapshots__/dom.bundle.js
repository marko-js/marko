// tags/child.marko
const $template = "<span><!>|<!>|<!></span>";
const $walks = "D%c%c%l";
const $input_msg = ($scope, input_msg) => _text($scope.a, input_msg);
const $input_count = ($scope, input_count) => _text($scope.b, input_count);
const $input_label = ($scope, input_label) => _text($scope.c, input_label);

// template.marko
const $catch_content__input_label = /*@__PURE__*/ _fill_join_closure("a9", 5, _closure_get(9, ($scope) => $input_label($scope.a, $scope._.f), 0, "a1"), 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__n($scope);
};
const $catch_content__n = _closure_get(12, ($scope) => $input_count($scope.a, $scope._.i), 0, "a2");
const $catch_content__err_message = ($scope, err_message) => $input_msg($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a7", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $catch_content__setup, $catch_content__$params);
const $n__closure = /*@__PURE__*/ _closure($catch_content__n);
const $n = /*@__PURE__*/ _fill_let("a10", 8, ($scope) => {
	_text($scope.b, $scope.i);
	$n__closure($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));
