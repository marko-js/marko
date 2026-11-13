// tags/card.marko
const $template$2 = "<button>clear</button><!><!>";
const $walks$2 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/badge.marko
const $template$1 = "<span> </span><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $if$1 = /*@__PURE__*/ _if("#text/1", "<em>three</em>");
const $input_tag$1 = ($scope, input_tag) => {
	_text($scope["#text/0"], input_tag);
	$if$1($scope, input_tag === "t3" ? 0 : 1);
};
const $input$1 = ($scope, input) => $input_tag$1($scope, input.tag);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!><button>toggle</button>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b%b b`)($walks$2);
const $for_content__input_tag = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_3_input_tag#0:7/setup", "#text/2", ($scope) => $input_tag$1($scope["#childScope/0"], $scope._.input_tag), 11);
const $for_content__setup = $for_content__input_tag;
const $if_content__input_tag = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_input_tag#0:7/setup", "#text/1", 0, ($scope) => $input_tag$1($scope["#childScope/0"], $scope._.input_tag));
const $if_content__setup = $if_content__input_tag;
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:6/subscribe", "input_label/10", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#6/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $show = _let("show/8", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/2", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $for_content__setup);
const $items = _let("items/9", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$show($scope, !$scope.show);
	$items($scope, []);
}));
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$show($scope, true);
	$setup__script($scope);
	$items($scope, [1, 2]);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag = /*@__PURE__*/ _const("input_tag", ($scope) => {
	$if_content__input_tag($scope);
	$for_content__input_tag($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
