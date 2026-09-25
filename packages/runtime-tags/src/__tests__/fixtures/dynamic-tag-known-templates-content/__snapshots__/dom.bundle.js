// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if$1 = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open$1 = /*@__PURE__*/ _let(5, ($scope) => $if$1($scope, $scope.f ? 0 : 1));
const $setup__script$2 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open$1($scope, !$scope.f);
}));
function $setup$1($scope) {
	$open$1($scope, false);
	$setup__script$2($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const(4, $if_content__input_content);
var card_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, $setup$1, $input$1);

// tags/label.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_text = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(1, " ", " ", $if_content__input_text);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $input = ($scope, input) => $input_text($scope, input.text);
const $input_text = /*@__PURE__*/ _const(4, $if_content__input_text);
var label_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);

// template.marko
const $useCardLabelCard_content = _content("a1", "second body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1, _content("a0", "first body"));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2, $useCardLabelCard_content);
const $useCard = /*@__PURE__*/ _let(3, ($scope) => {
	$dynamicTag($scope, $scope.d ? card_default : label_default, () => ({ text: "first" }));
	$dynamicTag2($scope, $scope.d ? label_default : card_default, () => ({ text: "second" }));
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$useCard($scope, !$scope.d);
}));
