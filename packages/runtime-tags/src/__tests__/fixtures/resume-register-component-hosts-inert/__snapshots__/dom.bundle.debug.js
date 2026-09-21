// tags/card.marko
const $template$2 = "<div class=card><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$2;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D%l", 0, $input$2);

// tags/plain.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<button id=inc> </button><!><!>";
const $walks = " D l%c";
const $inputcardCardPlain_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "known hosts: not registered");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputcardCardPlain_content);
const $input_card = ($scope, input_card) => $dynamicTag($scope, input_card ? card_default : plain_default, () => ({ title: "static" }));
const $input = ($scope, input) => $input_card($scope, input.card);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
