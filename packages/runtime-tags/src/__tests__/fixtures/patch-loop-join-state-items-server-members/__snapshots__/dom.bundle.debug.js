// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_a__OR__input_b = /*@__PURE__*/ _fill_for("__tests__/tags/child.marko_fill1 __tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_for("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:4_input_b#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), "#text/0"), "#text/0");
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__input_b);
const $for_content__setup = ($scope) => {
	$for_content__input_a._($scope);
	$for_content__input_b._($scope);
};
const $for_content__input_b = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__input_b);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
};
const $input_a$1 = /*@__PURE__*/ _const("input_a", $for_content__input_a);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $for_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $list = _let("list/6", ($scope) => $input_items($scope["#childScope/0"], $scope.list));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, $scope.list.concat("r"));
}));
function $setup($scope) {
	$list($scope, ["p", "q"]);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
