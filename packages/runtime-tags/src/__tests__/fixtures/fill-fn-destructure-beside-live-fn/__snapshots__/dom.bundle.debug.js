// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.fmt }));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__tag._($scope);
};
const $if_content__tag = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], { fn: $scope._.tag }));
const $pattern2 = ($scope, $pattern) => $fmt2($scope, $pattern[0]);
const $fmt2 = /*@__PURE__*/ _const("fmt", $if_content__fmt);
const $tag2 = /*@__PURE__*/ _const("tag", $if_content__tag);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$pattern2($scope, [$fmt($scope)]);
	$tag2($scope, $tag($scope));
});
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/8", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $fmt = ($scope) => (s) => s + ":" + $scope.input_title;
const $tag = ($scope) => (s) => s + "#" + $scope.input_title;
_resumed["__tests__/template.marko_0/fmt"] = $fmt;
_resumed["__tests__/template.marko_0/tag"] = $tag;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
