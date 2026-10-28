// tags/echo.marko
const $input_value_length = ($scope, input_value_length) => _text($scope.a, input_value_length);
const $input_value = ($scope, input_value) => $input_value_length($scope, input_value?.length);

// tags/show-await.marko
const $await_content__input_label__OR__x = /*@__PURE__*/ _or_resume("c5", 9, ($scope) => _text($scope.e, $scope._.e + $scope.i));
const $await_content__upper = ($scope, upper) => _text($scope.d, upper);
const $await_content__x = /*@__PURE__*/ _const(8, ($scope) => {
	_attr($scope.a, "title", $scope.i);
	_text($scope.c, $scope.i);
	$input_value($scope.g, $scope.i);
	$await_content__x_length($scope, $scope.i?.length);
	$await_content__upper($scope, $scope.i.toUpperCase());
	$await_content__input_label__OR__x($scope);
});
const $await_content__if = /*@__PURE__*/ _if(5, "<em>long</em>");
const $await_content__x_length = ($scope, x_length) => $await_content__if($scope, x_length > 6 ? 0 : 1);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $p = _let(6, ($scope) => $input_promise($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
