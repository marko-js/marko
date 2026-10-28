// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0", "input_n", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/1"], $scope._.input_n))));
const $for_content__setup = $for_content__input_n;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<em><!>:<!></em>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_n($scope, input.n);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_n", $for_content__input_n);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $count = _let("count/5", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
