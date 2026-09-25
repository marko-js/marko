// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$input_type($scope["#childScope/0"], "h1");
	$input_nested($scope["#childScope/0"], true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/card.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/heading.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$input_type($scope["#childScope/0"], card_default);
	$input_nested($scope["#childScope/0"]);
};
const $inputtype_content = _content("__tests__/tags/heading.marko_1*content", "self body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), $if_content__setup);
const $input_nested = ($scope, input_nested) => $if($scope, input_nested ? 0 : 1);
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_nested($scope, input.nested);
};
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, $walks, 0, $input);
