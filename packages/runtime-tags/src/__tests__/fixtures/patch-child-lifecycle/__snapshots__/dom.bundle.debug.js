// tags/widget/index.marko
const $template$1 = "<p><!>:<!></p>";
const $walks$1 = "D%c%l";
const $mounted__script = _script("__tests__/tags/widget/index.marko_0_mounted#5", ($scope) => _lifecycle($scope, { onMount: function() {
	$mounted($scope, +$scope.mounted + 1);
} }));
const $mounted = /*@__PURE__*/ _fill_let("__tests__/tags/widget/index.marko0", "mounted/5", ($scope) => {
	_text($scope["#text/1"], $scope.mounted);
	$mounted__script($scope);
});
function $setup$1($scope) {
	$mounted($scope, 0);
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button class=outer>+</button></main>";
const $walks = "D%b l";
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
