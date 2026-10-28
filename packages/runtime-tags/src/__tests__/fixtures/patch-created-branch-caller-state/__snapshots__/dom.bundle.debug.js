// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_signal("input_n __tests__/tags/panel.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_n))));
const $if_content__setup = $if_content__input_n;
const $if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $input_open$1 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_n($scope, input.n);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_n", $if_content__input_n);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_open = ($scope, input_open) => $input_open$1($scope["#childScope/0"], input_open);
const $input = ($scope, input) => $input_open($scope, input.open);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
