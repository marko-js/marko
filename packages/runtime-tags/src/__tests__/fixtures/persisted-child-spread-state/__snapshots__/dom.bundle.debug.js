// tags/badge.marko
const $template$2 = "<b class=badge> </b>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label($scope, input.label);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$2, "D l", 0, $input$2);

// tags/card.marko
const $template$1 = "<div class=card><h2> </h2><p> </p><button class=t> </button></div>";
const $walks$1 = "E lD l D m";
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko0", "open/8", ($scope) => _text($scope["#text/3"], $scope.open ? "hide" : "show"));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_note = ($scope, input_note) => _text($scope["#text/1"], input_note);
const $input$1 = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button id=o>o</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)($walks$1);
const $if_content__input_badge_label = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_badge_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_badge_label)));
const $if_content__setup = $if_content__input_badge_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_props__OR__on = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_props", /*@__PURE__*/ _or(8, ($scope) => {
	const $card_input_spread = {
		...$scope.input_props,
		note: $scope.on ? "on" : "off"
	};
	$input_title($scope["#childScope/1"], $card_input_spread.title);
	$input_note($scope["#childScope/1"], $card_input_spread.note);
}));
const $on = /*@__PURE__*/ _let("on/7", ($scope) => {
	$if($scope, $scope.on ? 0 : 1);
	$input_props__OR__on($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$on($scope, false);
	$setup__script($scope);
}
const $input_props = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_props", $input_props__OR__on);
const $input = ($scope, input) => {
	$input_badge($scope, input.badge);
	$input_props($scope, input.props);
};
const $input_badge = ($scope, input_badge) => $input_badge_label($scope, input_badge?.label);
const $input_badge_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_badge_label", $if_content__input_badge_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
