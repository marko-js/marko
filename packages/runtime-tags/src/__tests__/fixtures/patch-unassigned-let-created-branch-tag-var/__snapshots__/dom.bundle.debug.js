// tags/echo.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value));
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__x = _resumed["__tests__/template.marko_1_x#0:5/patch"] = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_x#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.x)));
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	_var($scope, "#childScope/0", $if_content__e);
};
const $if_content__e = _var_resume("__tests__/template.marko_1_e#3/var", ($scope, e) => _text($scope["#text/2"], e));
const $x = /*@__PURE__*/ _let("x/5", $if_content__x);
const $input_v = $x;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
