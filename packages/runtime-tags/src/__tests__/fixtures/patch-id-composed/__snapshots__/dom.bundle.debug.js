// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
function $setup$1($scope) {
	$uid($scope, _id($scope));
}
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_headingId = ($scope, input_headingId) => _attr($scope["#input/2"], "aria-describedby", input_headingId);
const $input$1 = ($scope, input) => {
	$input_name($scope, input.name);
	$input_headingId($scope, input.headingId);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h2>Fields</h2><!><!>";
const $walks = " b%c";
const $for_content__headingId = /*@__PURE__*/ _closure_get("headingId/8", ($scope) => {
	$input_headingId($scope["#childScope/0"], $scope._._.headingId);
	$input_headingId($scope["#childScope/1"], $scope._._.headingId);
}, ($scope) => $scope._._);
const $for_content__setup = ($scope) => {
	$for_content__headingId($scope);
	$setup$1($scope["#childScope/0"]);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$setup$1($scope["#childScope/1"]);
	$input_name($scope["#childScope/1"], $scope["#LoopKey"]);
};
const $if_content__for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1), $for_content__setup);
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_items, "key"]))));
const $if_content__setup = $if_content__input_items;
const $headingId = /*@__PURE__*/ _const("headingId", ($scope) => _attr($scope["#h2/0"], "id", $scope.headingId));
function $setup($scope) {
	$headingId($scope, _id($scope));
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_visible = ($scope, input_visible) => $if($scope, input_visible !== false ? 0 : 1);
const $input = ($scope, input) => {
	$input_visible($scope, input.visible);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
