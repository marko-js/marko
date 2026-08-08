// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__fmt = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "fmt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.fmt })));
const $if_content__setup = $if_content__fmt;
const $pattern2 = ($scope, $pattern) => $fmt2($scope, $pattern[0]);
const $fmt2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "fmt", $if_content__fmt);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $pattern2($scope, [$fmt($scope)]));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/7", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
function $fmt($scope) {
	return (s) => s + ":" + $scope.input_title;
}
_resume("__tests__/template.marko_0/fmt", $fmt);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
