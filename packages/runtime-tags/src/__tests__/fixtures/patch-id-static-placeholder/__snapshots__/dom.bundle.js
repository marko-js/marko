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
const $for_content6__setup = ($scope) => {
	$input_name($scope.a, "nested");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $for_content5__for = /*@__PURE__*/ _for_of_unkeyed(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $for_content6__setup);
const $for_content5__setup = ($scope) => $for_content5__for($scope, [[0, 1]]);
const $if_content4__setup = ($scope) => {
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $for_content4__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content4__setup);
const $for_content4__setup = ($scope) => $for_content4__if($scope, 0);
const $if_content3__setup = ($scope) => {
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $for_content3__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content3__setup);
const $for_content3__setup = ($scope) => $for_content3__if($scope, 0);
const $if_content2__setup = ($scope) => {
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $for_content2__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content2__setup);
const $for_content2__setup = ($scope) => $for_content2__if($scope, 0);
const $if_content__setup = ($scope) => {
	$input_name($scope.a, "loading");
	$input_uid($scope.a);
	$input_heading($scope.a);
};
const $for_content__if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $for_content__setup = ($scope) => $for_content__if($scope, 0);
const $placeholder_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__setup);
const $placeholder_content__for2 = /*@__PURE__*/ _for_in(1, "<!><!><!>", "b%", $for_content2__setup);
const $placeholder_content__for3 = /*@__PURE__*/ _for_to_unkeyed(2, "<!><!><!>", "b%", $for_content3__setup);
const $placeholder_content__for4 = /*@__PURE__*/ _for_until_unkeyed(3, "<!><!><!>", "b%", $for_content4__setup);
const $placeholder_content__for5 = /*@__PURE__*/ _for_of_unkeyed(4, "<!><!><!>", "b%", $for_content5__setup);
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__for($scope, [[0, 1]]);
	$placeholder_content__for2($scope, [{
		a: 0,
		b: 1
	}]);
	$placeholder_content__for3($scope, [
		1,
		0,
		1
	]);
	$placeholder_content__for4($scope, [
		2,
		0,
		1
	]);
	$placeholder_content__for5($scope, [[0, 1]]);
};
const $placeholder_content = _content$1("a5", "<!><!><!><!><!><!><!>", "b%b%b%b%b%", $placeholder_content__setup);
