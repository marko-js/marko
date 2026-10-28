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
const $if_content4__branchId = ($scope, branchId) => {
	_attr($scope.a, "for", branchId);
	_attr($scope.b, "id", branchId);
};
const $if_content4__setup = ($scope) => {
	$input_name($scope.c, "caught");
	$input_uid($scope.c);
	$input_heading($scope.c);
	$if_content4__branchId($scope, _id($scope));
};
const $for_content4__rowId = ($scope, rowId) => {
	_attr($scope.a, "for", rowId);
	_attr($scope.b, "id", rowId);
};
const $for_content4__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks), $if_content4__setup);
const $for_content4__setup = ($scope) => {
	$for_content4__rowId($scope, _id($scope));
	$for_content4__if($scope, 0);
};
const $if_content3__branchId = ($scope, branchId) => {
	_attr($scope.a, "for", branchId);
	_attr($scope.b, "id", branchId);
};
const $if_content3__setup = ($scope) => {
	$input_name($scope.c, "caught");
	$input_uid($scope.c);
	$input_heading($scope.c);
	$if_content3__branchId($scope, _id($scope));
};
const $for_content3__rowId = ($scope, rowId) => {
	_attr($scope.a, "for", rowId);
	_attr($scope.b, "id", rowId);
};
const $for_content3__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks), $if_content3__setup);
const $for_content3__setup = ($scope) => {
	$for_content3__rowId($scope, _id($scope));
	$for_content3__if($scope, 0);
};
const $if_content2__branchId = ($scope, branchId) => {
	_attr($scope.a, "for", branchId);
	_attr($scope.b, "id", branchId);
};
const $if_content2__setup = ($scope) => {
	$input_name($scope.c, "caught");
	$input_uid($scope.c);
	$input_heading($scope.c);
	$if_content2__branchId($scope, _id($scope));
};
const $for_content2__rowId = ($scope, rowId) => {
	_attr($scope.a, "for", rowId);
	_attr($scope.b, "id", rowId);
};
const $for_content2__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks), $if_content2__setup);
const $for_content2__setup = ($scope) => {
	$for_content2__rowId($scope, _id($scope));
	$for_content2__if($scope, 0);
};
const $if_content__branchId = ($scope, branchId) => {
	_attr($scope.a, "for", branchId);
	_attr($scope.b, "id", branchId);
};
const $if_content__setup = ($scope) => {
	$input_name($scope.c, "caught");
	$input_uid($scope.c);
	$input_heading($scope.c);
	$if_content__branchId($scope, _id($scope));
};
const $for_content__rowId = ($scope, rowId) => {
	_attr($scope.a, "for", rowId);
	_attr($scope.b, "id", rowId);
};
const $for_content__if = /*@__PURE__*/ _if(2, /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks), $if_content__setup);
const $for_content__setup = ($scope) => {
	$for_content__rowId($scope, _id($scope));
	$for_content__if($scope, 0);
};
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<label>row</label><input><!><!>", " b b%", $for_content__setup);
const $catch_content__for2 = /*@__PURE__*/ _for_in(1, "<label>row</label><input><!><!>", " b b%", $for_content2__setup);
const $catch_content__for3 = /*@__PURE__*/ _for_to_unkeyed(2, "<label>row</label><input><!><!>", " b b%", $for_content3__setup);
const $catch_content__for4 = /*@__PURE__*/ _for_until_unkeyed(3, "<label>row</label><input><!><!>", " b b%", $for_content4__setup);
const $catch_content__setup = ($scope) => {
	$catch_content__for($scope, [[0, 1]]);
	$catch_content__for2($scope, [{
		a: 0,
		b: 1
	}]);
	$catch_content__for3($scope, [
		1,
		0,
		1
	]);
	$catch_content__for4($scope, [
		2,
		0,
		1
	]);
};
const $catch_content = _content$1("a5", "<!><!><!><!><!><!>", "b%b%b%b%", $catch_content__setup);
