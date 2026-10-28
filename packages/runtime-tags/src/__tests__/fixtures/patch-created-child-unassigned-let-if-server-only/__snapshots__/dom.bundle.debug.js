// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_n#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_n)));
const $if_content__setup = $if_content__input_n;
const $if = /*@__PURE__*/ _if("#text/0", "<p><b>yes</b> <!></p>", "Dc%", $if_content__setup);
const $n = /*@__PURE__*/ _let("n/4", ($scope) => $if($scope, $scope.n ? 0 : 1));
const $input_n$1 = /*@__PURE__*/ _const("input_n", ($scope) => {
	$n($scope, $scope.input_n);
	$if_content__input_n($scope);
});
const $input$1 = ($scope, input) => $input_n$1($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_n = /*@__PURE__*/ _fill_signal("input_on __tests__/template.marko_fill0,input_n __tests__/template.marko_fill1", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ n: $scope.input_n }))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
