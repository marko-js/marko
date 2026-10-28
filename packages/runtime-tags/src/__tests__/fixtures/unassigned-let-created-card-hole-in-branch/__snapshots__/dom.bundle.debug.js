// tags/show-value.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template$2, "D l", 0, $input$2);

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/1"], $scope._.input_w);
	$input_value($scope["#childScope/2"], $scope._.input_w);
});
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__n._($scope);
};
const $if_content__n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.n));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section><b> </b> <i> </i>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `bD lbD l/${_w0}&`)("D l"), $if_content__setup);
const $n = /*@__PURE__*/ _let("n/5", ($scope) => $if($scope, $scope.n ? 0 : 1));
const $input_n$1 = $n;
const $input$1 = ($scope, input) => {
	$input_n$1($scope, input.n);
	$input_w$1($scope, input.w);
};
const $input_w$1 = /*@__PURE__*/ _const("input_w", $if_content__input_w);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_n__OR__input_w = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({
	n: $scope.input_n,
	w: $scope.input_w
})), 2);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n__OR__input_w);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n__OR__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_on__OR__input_n__OR__input_w);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
