// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_w$1 = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_w));
const $if_content__setup$1 = $if_content__input_w$1;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup$1);
const $k = /*@__PURE__*/ _let("k/5", ($scope) => $if$1($scope, $scope.k ? 0 : 1));
const $input_n$1 = $k;
const $input$1 = ($scope, input) => {
	$input_n$1($scope, input.n);
	$input_w$1($scope, input.w);
};
const $input_w$1 = /*@__PURE__*/ _const("input_w", $if_content__input_w$1);
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
