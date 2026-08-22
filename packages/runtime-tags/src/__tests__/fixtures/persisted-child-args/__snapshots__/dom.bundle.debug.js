// tags/badge/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_tag = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], $scope._.input_tag)));
const $if_content__setup = ($scope) => {
	$if_content__input_tag._($scope);
	$input$1($scope["#childScope/0"], "x");
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_tag($scope, input.tag);
const $input_tag = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_tag", $if_content__input_tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
