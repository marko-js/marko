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
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button id=c> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b D m`)($walks$1);
const $if_content__input_more = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	const $card_input_spread = {
		title: "fixed",
		...$scope._.input_more
	};
	$input_title($scope["#childScope/0"], $card_input_spread.title);
	$input_note($scope["#childScope/0"], $card_input_spread.note);
});
const $if_content__setup = ($scope) => {
	$if_content__input_more._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $count = /*@__PURE__*/ _let("count/9", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_props_title = ($scope, input_props_title) => $input_title($scope["#childScope/0"], input_props_title);
const $input_props_note = ($scope, input_props_note) => $input_note($scope["#childScope/0"], input_props_note);
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_props($scope, input.props);
	$input_show($scope, input.show);
	$input_more($scope, input.more);
};
const $input_props = ($scope, input_props) => {
	$input_props_title($scope, input_props?.title);
	$input_props_note($scope, input_props?.note);
};
const $input_more = /*@__PURE__*/ _const("input_more", $if_content__input_more);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
