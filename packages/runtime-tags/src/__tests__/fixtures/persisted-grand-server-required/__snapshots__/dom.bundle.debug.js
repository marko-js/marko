// tags/outer/tags/inner/index.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $if$1 = /*@__PURE__*/ _if("#text/0", "<em>o</em>");
const $input_open = ($scope, input_open) => $if$1($scope, input_open ? 0 : 1);
const $input$2 = ($scope, input) => $input_open($scope, input.open);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/outer/tags/inner/index.marko", $template$2, "b%c", 0, $input$2);

// tags/outer/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = () => {};
const $input_o$1 = ($scope, input_o) => $input_open($scope["#childScope/0"], input_o);
const $input$1 = ($scope, input) => $input_o$1($scope, input.o);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_o = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_o", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_o$1($scope["#childScope/0"], $scope._.input_o)));
const $if_content__setup = $if_content__input_o;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
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
