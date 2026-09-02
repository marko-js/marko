// tags/badge.marko
const $template$2 = "<b class=badge>[<!>]</b>";
const $walks$2 = "Db%l";
const $setup$2 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label($scope, input.label);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$2, $walks$2, 0, $input$2);

// tags/card.marko
const $template$1 = "<section class=card><h2> </h2><button class=toggle>toggle</button><!></section>";
const $walks$1 = "E l b%l";
const $if_content__input_title$1 = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_title)));
const $if_content__setup$1 = $if_content__input_title$1;
const $if$1 = /*@__PURE__*/ _if("#text/2", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko1", "open/6", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input_title$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko0", "input_title", ($scope) => {
	$if_content__input_title$1($scope);
	_text($scope["#text/0"], $scope.input_title);
}, ($scope, input_title) => $if_content__input_title$1($scope));
const $input$1 = ($scope, input) => $input_title$1($scope, input.title);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
