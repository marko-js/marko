// tags/child.marko
const $template = "<span><!> <!> <!></span>";
const $walks = "D%c%c%l";
const $input_message = ($scope, input_message) => _text($scope.a, input_message);
const $input_count = ($scope, input_count) => _text($scope.b, input_count);
const $input_label = ($scope, input_label) => _text($scope.c, input_label);

// template.marko
const $catch_content__input_label = /*@__PURE__*/ _init_resume("a0", _closure_resume("a1", /*@__PURE__*/ _fill_join_closure("a8", 5, /*@__PURE__*/ _closure_get(8, ($scope) => $input_label($scope.a, $scope._.f)), 0)));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__count($scope);
};
const $catch_content__count = /*@__PURE__*/ _init_resume("a11", /*@__PURE__*/ _closure_get(10, ($scope) => $input_count($scope.a, $scope._.h), 0, "a2"));
const $catch_content__err_message = ($scope, err_message) => $input_message($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
