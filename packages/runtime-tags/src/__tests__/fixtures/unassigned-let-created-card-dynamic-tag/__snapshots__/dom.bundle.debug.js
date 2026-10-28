// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $kbi_content__input_w = /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/tags/card.marko_1_input_w#0:4/subscribe");
const $kbi_content__setup = $kbi_content__input_w;
const $kbi_content = /*@__PURE__*/ _content("__tests__/tags/card.marko_1*content", " ", " ", $kbi_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $kbi_content);
const $k = /*@__PURE__*/ _let("k/5", ($scope) => $dynamicTag($scope, $scope.k ? "b" : "i"));
const $input_n$1 = $k;
const $input$1 = ($scope, input) => {
	$input_n$1($scope, input.n);
	$input_w$1($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($kbi_content__input_w);
const $input_w$1 = /*@__PURE__*/ _const("input_w", $input_w__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_w._($scope);
};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_n = /*@__PURE__*/ _const("input_n", $if_content__input_n);
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
