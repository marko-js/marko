// tags/mid/tags/leaf/index.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_text$2 = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$2 = ($scope, input) => $input_text$2($scope, input.text);
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/mid/tags/leaf/index.marko", $template$2, "D l", 0, $input$2);

// tags/mid/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = () => {};
const $input_text$1 = ($scope, input_text) => $input_text$2($scope["#childScope/0"], input_text);
const $input$1 = ($scope, input) => $input_text$1($scope, input.text);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_text = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_text", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_text$1($scope["#childScope/0"], $scope._.input_text)));
const $if_content__setup = $if_content__input_text;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_text($scope, input.text);
const $input_text = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_text", $if_content__input_text);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
