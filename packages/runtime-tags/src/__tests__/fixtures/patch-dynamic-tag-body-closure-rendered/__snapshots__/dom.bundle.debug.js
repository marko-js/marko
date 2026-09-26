// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_type($scope["#childScope/0"], card_default);
}
const $input_depth = ($scope, input_depth) => $input_depth$1($scope["#childScope/0"], input_depth);
const $input = ($scope, input) => $input_depth($scope, input.depth);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/heading.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $inputtype_content__input_depth = /*@__PURE__*/ _closure_get("input_depth", ($scope) => _text($scope["#text/0"], $scope._.input_depth), 0, "__tests__/tags/heading.marko_1_input_depth#4/subscribe");
const $inputtype_content__setup = $inputtype_content__input_depth;
const $inputtype_content = _content("__tests__/tags/heading.marko_1*content", "depth <!>", "b%", $inputtype_content__setup);
_content_resume($inputtype_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_depth($scope, input.depth);
};
const $input_depth__closure = /*@__PURE__*/ _closure($inputtype_content__input_depth);
const $input_depth = /*@__PURE__*/ _const("input_depth", $input_depth__closure);
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, "b%c", 0, $input);
