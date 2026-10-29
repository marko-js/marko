// tags/tree.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_depth = /*@__PURE__*/ _init_resume("__tests__/tags/tree.marko_1_input_depth#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/1"], $scope._.input_depth - 1)));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_fn._($scope);
	$setup$2($scope["#childScope/0"]);
};
const $if_content__input_fn = /*@__PURE__*/ _init_resume("__tests__/tags/tree.marko_1_input_fn#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/tree.marko_fill0", "input_fn", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$input_fn$1($scope["#childScope/0"], $scope._.input_fn);
	$input_fn($scope["#childScope/1"], $scope._.input_fn);
})));
const $input_fn = /*@__PURE__*/ _fill_const("__tests__/tags/tree.marko_fill0", "input_fn", $if_content__input_fn);
const $if$1 = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$2, "b%c"), $if_content__setup$1);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if$1($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input$1 = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_fn($scope, input.fn);
};
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_fn($scope["#childScope/0"], function() {
	return "f:" + $scope._.input_label;
}))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$input_depth($scope["#childScope/0"], 2);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $f = _let("f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
