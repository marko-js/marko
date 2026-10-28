// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $card_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope._["#LoopKey"]);
	$card_content__uid($scope, _id($scope));
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/inner.marko
const $template$1 = "<p><!></p>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, "D%l", 0, $input$1);

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<input><label>own</label><button>clear</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b b/${_w0}&`)("D%l");
const $own = ($scope, own) => {
	_attr($scope["#input/0"], "id", own);
	_attr($scope["#label/1"], "for", own);
};
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$c($scope, undefined);
}));
function $setup($scope) {
	$setup__script($scope);
	$own($scope, _id($scope));
}
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "c/8", ($scope) => $input_content$1($scope["#childScope/3"], $scope.c));
const $input_content = $c;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
