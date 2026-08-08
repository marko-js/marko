// tags/card/tags/badge/index.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$2 = ($scope, input) => $input_text($scope, input.text);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/card/tags/badge/index.marko", $template$2, "D l", $setup$2, $input$2);

// tags/card/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<h3> </h3>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l");
const $setup$1 = () => {};
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_subtitle$1 = ($scope, input_subtitle) => $input_text($scope["#childScope/1"], input_subtitle);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_subtitle$1($scope, input.subtitle);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_subtitle._($scope);
};
const $if_content__input_subtitle = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_subtitle", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_subtitle$1($scope["#childScope/0"], $scope._.input_subtitle)));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_subtitle($scope, input.subtitle);
};
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
const $input_subtitle = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_subtitle", $if_content__input_subtitle);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
