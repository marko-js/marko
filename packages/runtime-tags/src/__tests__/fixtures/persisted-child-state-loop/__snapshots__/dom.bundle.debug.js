// tags/list/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $for_content__input_suffix = /*@__PURE__*/ _fill_join("__tests__/tags/list/index.marko0", "input_suffix", /*@__PURE__*/ _for_closure("#ul/0", ($scope) => _text($scope["#text/1"], $scope._.input_suffix)));
const $for_content__setup = $for_content__input_suffix;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_suffix($scope, input.suffix);
};
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/tags/list/index.marko0", "input_suffix", $for_content__input_suffix);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_items($scope["#childScope/0"], $scope.count ? ["a", "b"] : ["a"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_s = _fill_const("__tests__/template.marko0", "input_s", ($scope) => $input_suffix($scope["#childScope/0"], $scope.input_s));
const $input = ($scope, input) => $input_s($scope, input.s);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
