// tags/plain.marko
const $template$4 = "<span>plain</span>";
const $walks$4 = "b";
const $setup$4 = ($_) => {};
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$4, "b");

// tags/field.marko
const $template$3 = "<label> </label><input>";
const $walks$3 = " D l b";
const $setup$3 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$2 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$3, $walks$3, 0, $input$2);

// tags/thrower.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
function fail() {
	throw new Error("thrown");
}
function $setup$2($scope) {
	_text($scope["#text/0"], fail());
}
var thrower_default = /*@__PURE__*/ _template("__tests__/tags/thrower.marko", $template$2, "D l", $setup$2);

// tags/a-tag.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template$4, $template$3);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&%c`)("b", $walks$3);
const $catch_content = _content("__tests__/tags/a-tag.marko_2*content", "caught");
const $try_content__setup = ($scope) => $setup$2($scope["#childScope/0"]);
const $input_n = ($scope, input_n) => $input_name($scope["#childScope/1"], input_n);
const $try = /*@__PURE__*/ _try("#text/2", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$input_uid($scope["#childScope/1"]);
	$input_heading($scope["#childScope/1"]);
	$try($scope);
}
const $input$1 = ($scope, input) => $input_n($scope, input.n);
var a_tag_default = /*@__PURE__*/ _template("__tests__/tags/a-tag.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_n($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_name($scope["#childScope/1"], `row ${$scope["#LoopKey"]}`);
	$input_uid($scope["#childScope/1"]);
	$input_heading($scope["#childScope/1"]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$3), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$3), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
