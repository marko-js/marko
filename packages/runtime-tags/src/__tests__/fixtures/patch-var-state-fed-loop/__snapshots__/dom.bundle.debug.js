// tags/labeler.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	_return($scope, "[" + $scope.input_title + "]");
	_text($scope["#text/0"], $scope.input_title);
});
const $input$2 = ($scope, input) => $input_title($scope, input.title);
var labeler_default = /*@__PURE__*/ _template("__tests__/tags/labeler.marko", $template$2, "D l", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__input_suffix__OR__item = /*@__PURE__*/ _fill_join_for("__tests__/tags/list.marko_fill0", "input_suffix", /*@__PURE__*/ _or(5, ($scope) => $input_title($scope["#childScope/0"], $scope.item + $scope._.input_suffix)), 0, "#text/0");
const $for_content__input_suffix = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_suffix__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_suffix._($scope);
	_var($scope, "#childScope/0", $for_content__label);
};
const $for_content__label = _var_resume("__tests__/tags/list.marko_1_label#6/var", ($scope, label) => _text($scope["#text/2"], label));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_suffix__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$2), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_suffix$1($scope, input.suffix);
};
const $input_suffix$1 = /*@__PURE__*/ _fill_const("__tests__/tags/list.marko_fill0", "input_suffix", $for_content__input_suffix);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $items = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "items/5", ($scope) => $input_items($scope["#childScope/0"], $scope.items));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, ["y"]);
}));
function $setup($scope) {
	$setup__script($scope);
	$items($scope, ["x"]);
}
const $input_suffix = ($scope, input_suffix) => $input_suffix$1($scope["#childScope/0"], input_suffix);
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
