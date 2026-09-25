// tags/card.marko
const $template$3 = "<button id=toggle>toggle</button><!><!>";
const $walks$3 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$3($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$2 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$3, $walks$3, $setup$3, $input$2);

// tags/heading.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $inputtype_content = /*@__PURE__*/ _content("__tests__/tags/heading.marko_1*content", "spread body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_type$1($scope, input.type);
const $renders$1 = [$inputtype_content];
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template$2, "b%c", 0, $input$1, $renders$1);

// tags/wrapper.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = () => {};
const $input_type = ($scope, input_type) => $input_type$1($scope["#childScope/0"], input_type);
const $input = ($scope, input) => $input_type($scope, input.type);
const $renders = [$inputtype_content];
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, 0, $input, $renders);

// tags/v:heading.marko.register-$inputtype_content.js
_resumed["__tests__/tags/heading.marko_1*content"] = $inputtype_content;

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
function $setup($scope) {
	$input_type($scope["#childScope/0"], "h1");
	$input_type($scope["#childScope/1"], card_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
