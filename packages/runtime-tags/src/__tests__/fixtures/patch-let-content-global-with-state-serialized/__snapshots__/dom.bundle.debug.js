// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $c = _let("c/4", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $card_content__count__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_1_$global_label#0:7_count#2", ($scope) => _text($scope["#text/1"], _global_read($scope.$global, "label") + $scope.count), "label");
const $card_content__count = _let("count/2", $card_content__count__$global_label);
const $card_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$card_content__count($scope, +$scope.count + 1);
}));
const $card_content__setup = ($scope) => {
	$card_content__count($scope, 0);
	$card_content__setup__script($scope);
};
const $card_content = _content("__tests__/template.marko_1*content", "<button>+</button><b> </b>", " bD ", $card_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $card_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
