// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open$1 = /*@__PURE__*/ _let("open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$2 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open$1($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open$1($scope, false);
	$setup__script$2($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/label.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__input_text = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_text));
const $if_content__setup = $if_content__input_text;
const $if = /*@__PURE__*/ _if("#text/1", " ", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/label.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input = ($scope, input) => $input_text($scope, input.text);
const $input_text = /*@__PURE__*/ _const("input_text", $if_content__input_text);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button id=swap>swap</button><!><!><!>";
const $walks = " b%b%c";
const $useCardLabelCard_content = _content("__tests__/template.marko_2*content", "second body");
const $useCardCardLabel_content = _content("__tests__/template.marko_1*content", "first body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $useCardCardLabel_content);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", $useCardLabelCard_content);
const $useCard = /*@__PURE__*/ _let("useCard/3", ($scope) => {
	$dynamicTag($scope, $scope.useCard ? card_default : label_default, () => ({ text: "first" }));
	$dynamicTag2($scope, $scope.useCard ? label_default : card_default, () => ({ text: "second" }));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$useCard($scope, !$scope.useCard);
}));
function $setup($scope) {
	$useCard($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
