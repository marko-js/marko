// tags/field.marko
const $template$1 = "<label>field</label><input>";
const $walks$1 = " b b";
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
};
function $setup$1($scope) {
	$uid($scope, _id($scope));
}
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!>${_w0}${_w1}<!><!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b/${_w0}&/${_w1}&%c`)($walks$1, $walks$1);
const $if_content3__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if_content2__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
};
const $else_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $elseif_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$setup$1($scope["#childScope/2"]);
	$setup$1($scope["#childScope/3"]);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1), $if_content2__setup);
const $if_content__input_nested = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_nested ? 0 : 1));
const $if_content__setup = ($scope) => {
	$if_content__input_nested._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1), $if_content__setup, /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}`)($template$1, $template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&`)($walks$1, $walks$1, $walks$1, $walks$1), $elseif_content__setup, $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $else_content__setup);
const $input_mode = ($scope, input_mode) => $if($scope, input_mode === 0 ? 0 : input_mode === 1 ? 1 : 2);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup$1($scope["#childScope/2"]);
}
const $if2 = /*@__PURE__*/ _if("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content3__setup);
const $input_other = ($scope, input_other) => $if2($scope, input_other ? 0 : 1);
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_nested($scope, input.nested);
	$input_other($scope, input.other);
};
const $input_nested = /*@__PURE__*/ _const("input_nested", $if_content__input_nested);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
