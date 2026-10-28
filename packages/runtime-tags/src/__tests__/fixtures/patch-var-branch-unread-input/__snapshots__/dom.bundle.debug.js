// tags/user-info.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_user$1 = /*@__PURE__*/ _const("input_user", ($scope) => _return($scope, $scope.input_user));
const $input$1 = ($scope, input) => $input_user$1($scope, input.user);
var user_info_default = /*@__PURE__*/ _template("__tests__/tags/user-info.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc> </button>${_w0}<p> </p><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => ` D 0${_w0}&lD l%c`)("");
const $if_content__input_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_user2#0:10/init", /*@__PURE__*/ _fill_signal("input_user2 __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/5", 0, ($scope) => $input_user$1($scope["#childScope/0"], $scope._.input_user2))));
const $if_content__setup = ($scope) => {
	$if_content__input_user._($scope);
	_var($scope, "#childScope/0", $if_content__info);
};
const $if_content__info = _var_resume("__tests__/template.marko_1_info2#3/var", ($scope, info2) => $if_content__info2_name($scope, info2?.name));
const $if_content__info2_name = ($scope, info2_name) => _text($scope["#text/2"], info2_name);
const $n = /*@__PURE__*/ _let("n/11", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/2", $info);
	$n($scope, 0);
	$setup__script($scope);
}
const $info = _var_resume("__tests__/template.marko_0_info#12/var", ($scope, info) => $info_name($scope, info?.name));
const $info_name = ($scope, info_name) => _text($scope["#text/4"], info_name);
const $input_user = ($scope, input_user) => $input_user$1($scope["#childScope/2"], input_user);
const $if = /*@__PURE__*/ _if("#text/5", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_user($scope, input.user);
	$input_show($scope, input.show);
	$input_user2($scope, input.user2);
};
const $input_user2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_user2", $if_content__input_user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
