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
const $placeholder_content__setup = ($scope) => {
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $placeholder_content = _content$1("a9", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
const $inputloadedLoadedsection_content__setup = ($scope) => {
	$input_name($scope.a, $scope._._._.M);
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $inputloadedLoadedsection_content = _content$1("a0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $inputloadedLoadedsection_content__setup);
_content_resume($inputloadedLoadedsection_content);
