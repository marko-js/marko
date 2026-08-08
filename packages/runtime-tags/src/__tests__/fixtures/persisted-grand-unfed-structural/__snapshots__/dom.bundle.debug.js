// tags/badge/index.marko
const $template$2 = "<!><!><p> </p>";
const $walks$2 = "b%bD l";
const $setup$2 = () => {};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em>on</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input_text = ($scope, input_text) => _text($scope["#text/1"], input_text);
const $input$2 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_text($scope, input.text);
};
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/wrap/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div class=wrap>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2);
const $input_label = ($scope, input_label) => $input_text($scope["#childScope/0"], input_label);
function $setup$1($scope) {
	$input_open($scope["#childScope/0"]);
}
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_a)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
