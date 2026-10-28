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
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Repeat_content__walks = "b%c";
const $Repeat_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($Repeat_content__template, $Repeat_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)($Repeat_content__walks, $Repeat_content__walks);
const $if_content3__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "repeat");
};
const $if_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "right");
};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "left");
};
const $Repeat_content__if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content3__setup);
const $Repeat_content__input_right = /*@__PURE__*/ _closure_get("input_right/8", ($scope) => $Repeat_content__if($scope, $scope._.input_right ? 0 : 1), 0, "__tests__/template.marko_1_input_right#0:7/subscribe");
const $Repeat_content__setup = $Repeat_content__input_right;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_left = ($scope, input_left) => $if($scope, input_left ? 0 : 1);
const $if2 = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content2__setup);
const $input_right__closure = /*@__PURE__*/ _closure($Repeat_content__input_right);
const $input_right = /*@__PURE__*/ _const("input_right", ($scope) => {
	$if2($scope, $scope.input_right ? 0 : 1);
	$input_right__closure($scope);
});
function $setup($scope) {
	$scope["#childScope/2"]._ = $scope;
	$Repeat_content__setup($scope["#childScope/2"]);
	$scope["#childScope/3"]._ = $scope;
	$Repeat_content__setup($scope["#childScope/3"]);
}
const $input = ($scope, input) => {
	$input_left($scope, input.left);
	$input_right($scope, input.right);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
