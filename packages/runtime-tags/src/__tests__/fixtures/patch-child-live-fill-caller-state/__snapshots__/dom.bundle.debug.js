// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__fmt = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_fmt#0:5/init", /*@__PURE__*/ _fill("__tests__/tags/child.marko_fill0", "fmt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.fmt("x")))));
const $if_content__setup = $if_content__fmt;
const $fmt2 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "fmt", $if_content__fmt);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", ($scope) => $fmt2($scope, $fmt($scope)));
const $if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_suffix($scope, input.suffix);
	$input_show$1($scope, input.show);
};
const $fmt = ($scope) => (v) => v + $scope.input_suffix;
_bind_resume("__tests__/tags/child.marko_0/fmt input_suffix", $fmt);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", 0, $input$1);

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=s>s</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $s = /*@__PURE__*/ _fill_let("__tests__/tags/mid.marko_fill0", "s/5", ($scope) => $input_suffix($scope["#childScope/0"], $scope.s));
const $setup__script$1 = _script("__tests__/tags/mid.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, $scope.s + "!");
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$s($scope, "!");
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=show>show</button>`)($template$1);
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
