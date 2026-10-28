// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_n", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ n: $scope.input_n })))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_on__OR__input_n);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $n = _let("n/4", ($scope) => $await_promise($scope, Promise.resolve($scope.n)));
const $input_n = $n;
const $setup = $await_content;
const $input = ($scope, input) => $input_n($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", $setup, $input);
