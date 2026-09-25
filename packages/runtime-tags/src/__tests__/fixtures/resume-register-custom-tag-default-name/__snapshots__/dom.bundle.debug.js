// tags/card.marko
const $template$2 = "<button id=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/box.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $inputasdiv_content = /*@__PURE__*/ _content("__tests__/tags/box.marko_1*content", "box body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputasdiv_content);
const $input_as = ($scope, input_as) => $dynamicTag($scope, input_as || "div", () => ({ class: "box" }));
const $input = ($scope, input) => $input_as($scope, input.as);
const $renders = [$inputasdiv_content];
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", $template$1, "b%c", 0, $input, $renders);

// tags/v:box.marko.register-$inputasdiv_content.js
_resumed["__tests__/tags/box.marko_1*content"] = $inputasdiv_content;

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<button id=inc> </button>${_w0}${_w1}${_w2}<!>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => ` D l/${_w0}&/${_w1}&/${_w2}&b`)("b%c", "b%c", "b%c");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_as($scope["#childScope/2"]);
	$input_as($scope["#childScope/3"], "section");
	$input_as($scope["#childScope/4"], card_default);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
