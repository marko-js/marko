// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__fmt = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "fmt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.fmt })));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__alt._($scope);
	$if_content__last._($scope);
	$if_content__tag._($scope);
};
const $if_content__alt = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "alt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], { fn: $scope._.alt })));
const $if_content__last = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill5", "last", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/2"], { fn: $scope._.last })));
const $if_content__tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill6", "tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/3"], { fn: $scope._.tag })));
const $fmt3 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "fmt", $if_content__fmt);
const $input_flag__OR__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_title", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_flag", /*@__PURE__*/ _or(6, ($scope) => $fmt3($scope, $scope.input_flag ? $fmt($scope) : $fmt2))));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_title);
const $last2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill5", "last", $if_content__last);
const $tag2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill6", "tag", $if_content__tag);
const $alt2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "alt", $if_content__alt);
const $input_title__OR__input_alt = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_alt", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_title", /*@__PURE__*/ _or(8, ($scope) => $alt2($scope, $scope.input_alt || $alt($scope)))));
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$last2($scope, (0, $last($scope)));
	$tag2($scope, $tag($scope));
	$input_flag__OR__input_title($scope);
	$input_title__OR__input_alt($scope);
});
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_title__OR__input_alt);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}`)($template$1, $template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&`)("D l", "D l", "D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/13", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_title($scope, input.title);
	$input_alt($scope, input.alt);
};
function $fmt2(s) {
	return s;
}
const $fmt = ($scope) => (s) => s + ":" + $scope.input_title;
const $last = ($scope) => (s) => s + ";" + $scope.input_title;
const $tag = ($scope) => (s) => s + "#" + $scope.input_title;
const $alt = ($scope) => (s) => s + "=" + $scope.input_title;
_resumed["__tests__/template.marko_0/fmt2"] = $fmt2;
_bind_resume("__tests__/template.marko_0/fmt input_title", $fmt);
_bind_resume("__tests__/template.marko_0/last input_title", $last);
_bind_resume("__tests__/template.marko_0/tag input_title", $tag);
_bind_resume("__tests__/template.marko_0/alt input_title", $alt);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
