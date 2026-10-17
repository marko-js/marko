// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_a__OR__d = /*@__PURE__*/ _fill_join_for("__tests__/tags/child.marko_fill1/unpatched", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_1_input_a#0:5_d#1/init", 2, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.d)), "#text/0");
const $for_content__d = /*@__PURE__*/ _const("d", $for_content__input_a__OR__d);
const $for_content__input_b = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_b#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__d($scope, $scope._.input_b + "!"))));
const $for_content__setup = ($scope) => {
	$for_content__input_b._($scope);
	$for_content__input_a._($scope);
};
const $for_content__input_a = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_a__OR__d);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<p> </p>", "D ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_b$1($scope, input.b);
	$input_a($scope, input.a);
};
const $input_b$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", $for_content__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $for_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=n>+</button><button class=l>l</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b b`)("b%c");
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/6", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $list = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "list/7", ($scope) => $input_items($scope["#childScope/0"], $scope.list));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$n($scope, $scope.n + "k");
	});
	_on($scope["#button/2"], "click", function() {
		$list($scope, $scope.list.concat("r"));
	});
});
function $setup($scope) {
	$setup__script($scope);
	$n($scope, "k");
	$list($scope, ["p", "q"]);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
