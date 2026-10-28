// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = _resumed["__tests__/tags/card.marko_0_#text#0/init"] = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $n = _fill_resume("__tests__/tags/card.marko_fill0", /*@__PURE__*/ _let("n/4", ($scope) => $await_promise($scope, Promise.resolve($scope.n))));
const $input_n$1 = $n;
const $setup$1 = $await_content;
const $input$1 = ($scope, input) => $input_n$1($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button> </button><main><!></main>";
const $walks = " D lD%l";
const $c = /*@__PURE__*/ _let("c/8", ($scope) => _text($scope["#text/1"], $scope.c));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$c($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_on__OR__input_n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_n", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ n: $scope.input_n })))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
