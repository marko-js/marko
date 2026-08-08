// tags/badge/index.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = () => {};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em>on</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input_text = ($scope, input_text) => _text($scope["#text/1"], input_text);
const $input$1 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_text($scope, input.text);
};
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_text($scope["#childScope/0"], $scope._.input_a)));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
	$input_open($scope["#childScope/0"]);
	$input_open($scope["#childScope/1"], true);
};
const $if_content__input_b = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_b", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_text($scope["#childScope/1"], $scope._.input_b)));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($walks$1, $walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
