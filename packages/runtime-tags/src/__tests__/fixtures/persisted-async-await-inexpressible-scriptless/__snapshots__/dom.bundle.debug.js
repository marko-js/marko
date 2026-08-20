// tags/widget/index.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => _return($scope, $scope.input_label));
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", "", "", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $await_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => $input_label($scope["#childScope/0"], $scope._._.input_value), ($scope) => $scope._._);
const $await_content__setup = ($scope) => {
	$await_content__input_value($scope);
	_var($scope, "#childScope/0", $await_content__w);
};
const $await_content__w = _var_resume("__tests__/template.marko_2_w#3/var", ($scope, w) => _text($scope["#text/2"], w));
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $if_content__input_value = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.input_value)));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value__closure = /*@__PURE__*/ _closure($await_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	$if_content__input_value($scope);
	$input_value__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
