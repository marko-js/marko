// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params7) => $await_content__value($scope, $params7[0]);
const $if_content4__branchId = ($scope, branchId) => {
	_attr($scope["#label/0"], "for", branchId);
	_attr($scope["#input/1"], "id", branchId);
};
const $if_content4__setup = ($scope) => {
	$input_name($scope["#childScope/2"], "caught");
	$input_uid($scope["#childScope/2"]);
	$input_heading($scope["#childScope/2"]);
	$if_content4__branchId($scope, _id($scope));
};
const $for_content4__rowId = ($scope, rowId) => {
	_attr($scope["#label/0"], "for", rowId);
	_attr($scope["#input/1"], "id", rowId);
};
const $for_content4__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1), $if_content4__setup);
const $for_content4__setup = ($scope) => {
	$for_content4__rowId($scope, _id($scope));
	$for_content4__if($scope, true ? 0 : 1);
};
const $if_content3__branchId = ($scope, branchId) => {
	_attr($scope["#label/0"], "for", branchId);
	_attr($scope["#input/1"], "id", branchId);
};
const $if_content3__setup = ($scope) => {
	$input_name($scope["#childScope/2"], "caught");
	$input_uid($scope["#childScope/2"]);
	$input_heading($scope["#childScope/2"]);
	$if_content3__branchId($scope, _id($scope));
};
const $for_content3__rowId = ($scope, rowId) => {
	_attr($scope["#label/0"], "for", rowId);
	_attr($scope["#input/1"], "id", rowId);
};
const $for_content3__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1), $if_content3__setup);
const $for_content3__setup = ($scope) => {
	$for_content3__rowId($scope, _id($scope));
	$for_content3__if($scope, true ? 0 : 1);
};
const $if_content2__branchId = ($scope, branchId) => {
	_attr($scope["#label/0"], "for", branchId);
	_attr($scope["#input/1"], "id", branchId);
};
const $if_content2__setup = ($scope) => {
	$input_name($scope["#childScope/2"], "caught");
	$input_uid($scope["#childScope/2"]);
	$input_heading($scope["#childScope/2"]);
	$if_content2__branchId($scope, _id($scope));
};
const $for_content2__rowId = ($scope, rowId) => {
	_attr($scope["#label/0"], "for", rowId);
	_attr($scope["#input/1"], "id", rowId);
};
const $for_content2__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1), $if_content2__setup);
const $for_content2__setup = ($scope) => {
	$for_content2__rowId($scope, _id($scope));
	$for_content2__if($scope, true ? 0 : 1);
};
const $if_content__branchId = ($scope, branchId) => {
	_attr($scope["#label/0"], "for", branchId);
	_attr($scope["#input/1"], "id", branchId);
};
const $if_content__setup = ($scope) => {
	$input_name($scope["#childScope/2"], "caught");
	$input_uid($scope["#childScope/2"]);
	$input_heading($scope["#childScope/2"]);
	$if_content__branchId($scope, _id($scope));
};
const $for_content__rowId = ($scope, rowId) => {
	_attr($scope["#label/0"], "for", rowId);
	_attr($scope["#input/1"], "id", rowId);
};
const $for_content__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<label>branch</label><input>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1), $if_content__setup);
const $for_content__setup = ($scope) => {
	$for_content__rowId($scope, _id($scope));
	$for_content__if($scope, true ? 0 : 1);
};
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<label>row</label><input><!><!>", " b b%", $for_content__setup);
const $catch_content__for2 = /*@__PURE__*/ _for_in("#text/1", "<label>row</label><input><!><!>", " b b%", $for_content2__setup);
const $catch_content__for3 = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<label>row</label><input><!><!>", " b b%", $for_content3__setup);
const $catch_content__for4 = /*@__PURE__*/ _for_until_unkeyed("#text/3", "<label>row</label><input><!><!>", " b b%", $for_content4__setup);
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
const $catch_content = _content("__tests__/template.marko_2*content", "<!><!><!><!><!><!>", "b%b%b%b%", $catch_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:3/init", /*@__PURE__*/ _closure_get("input_promise/4", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:3/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
