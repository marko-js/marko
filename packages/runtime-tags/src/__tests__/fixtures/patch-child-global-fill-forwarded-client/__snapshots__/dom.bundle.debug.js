// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a))));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", $if_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", 0, $input$1);

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup__$global_x = /*@__PURE__*/ _fill_global_join("__tests__/tags/mid.marko_0_$global_x#5", ($scope) => $input_a($scope["#childScope/0"], $scope.$global.x), "x");
const $setup$1 = $setup__$global_x;
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>t</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $show = _let("show/2", ($scope) => $input_show($scope["#childScope/0"], $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
