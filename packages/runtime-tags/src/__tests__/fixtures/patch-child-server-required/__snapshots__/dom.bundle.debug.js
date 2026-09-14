// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em>open</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input$1 = ($scope, input) => $input_open($scope, input.open);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_o = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_o", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_open($scope["#childScope/0"], $scope._.input_o)));
const $if_content__setup = $if_content__input_o;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_o($scope, input.o);
const $input_o = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_o", $if_content__input_o);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
