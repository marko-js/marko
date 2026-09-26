// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	_return($scope, $scope.input_label + "!");
	_text($scope["#text/0"], $scope.input_label);
});
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__x);
};
const $if_content__x = _var_resume("__tests__/template.marko_1_x#3/var", ($scope, x) => _text($scope["#text/2"], x));
const $if = /*@__PURE__*/ _if("#main/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
