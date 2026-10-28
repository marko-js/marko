// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope.a, "for", uid);
	_attr($scope.c, "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "Ji"));
const $input_name = ($scope, input_name) => _text($scope.b, input_name);
const $input_heading = ($scope, input_heading) => _attr($scope.c, "aria-describedby", input_heading);

// template.marko
const $catch_content__heading = /*@__PURE__*/ _closure_get(7, ($scope) => $input_heading($scope.a, $scope._.f));
const $catch_content__setup = ($scope) => {
	$catch_content__heading($scope);
	$input_uid($scope.a);
};
const $catch_content__error_message = ($scope, error_message) => $input_name($scope.a, error_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $catch_content__setup, $catch_content__$params);
const $placeholder_content__heading = /*@__PURE__*/ _closure_get(7, ($scope) => $input_heading($scope.a, $scope._.f));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__heading($scope);
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
};
const $placeholder_content = _content$1("a7", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
