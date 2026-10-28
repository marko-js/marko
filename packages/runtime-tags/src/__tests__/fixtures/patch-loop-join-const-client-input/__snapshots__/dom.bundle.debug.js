// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__j = ($scope, j) => _text($scope["#text/0"], j);
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill0/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:4_item#2/init", 3, ($scope) => $for_content__j($scope, $scope._.input_a + $scope.item)), _for_closure, "#text/0");
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__item);
const $for_content__setup = $for_content__input_a;
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_a__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $for_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c");
const $n = /*@__PURE__*/ _let("n/7", ($scope) => $input_a($scope["#childScope/1"], "m" + $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_a($scope["#childScope/0"], input_x);
const $input_items = ($scope, input_items) => {
	$input_items$1($scope["#childScope/0"], input_items);
	$input_items$1($scope["#childScope/1"], input_items);
};
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
