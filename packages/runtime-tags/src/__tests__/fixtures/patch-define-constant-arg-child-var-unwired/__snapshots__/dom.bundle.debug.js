// tags/x-child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => _return($scope, $scope.input_x + "!"));
const $input$1 = ($scope, input) => $input_x($scope, input.x);
var x_child_default = /*@__PURE__*/ _template("__tests__/tags/x-child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $D_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)("");
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($D_content__walks);
const $D_content__r = _var_resume("__tests__/template.marko_1_r#6/var", ($scope, r) => _text($scope["#text/2"], r));
const $D_content__on = ($scope, on) => $input_x($scope["#childScope/0"], on);
const $D_content__setup = ($scope) => _var($scope, "#childScope/0", $D_content__r);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
function $setup($scope) {
	$D_content__setup($scope["#childScope/0"]);
	$D_content__on($scope["#childScope/0"], "a");
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
