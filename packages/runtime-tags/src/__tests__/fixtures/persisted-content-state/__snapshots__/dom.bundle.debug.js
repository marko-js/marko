// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $card_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/1"], $scope._.input_note));
const $card_content__setup = ($scope) => {
	$card_content__input_note($scope);
	$card_content__count($scope);
};
const $card_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $card_content = /*@__PURE__*/ _content$1("__tests__/template.marko_1*content", "<em><!>:<!></em>", "D%c%", $card_content__setup);
const $count__closure = /*@__PURE__*/ _closure($card_content__count);
const $count = /*@__PURE__*/ _let("count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $card_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
