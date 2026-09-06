// tags/pill.marko
const $template$1 = "<b class=pill> </b>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$1 = ($scope, input) => $input_text($scope, input.text);
var pill_default = /*@__PURE__*/ _template("__tests__/tags/pill.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $await_content__value = ($scope, value) => $input_text($scope["#childScope/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"));
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_promise = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_promise));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup, "<em>closed</em>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
