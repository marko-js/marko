// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__fmt = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "fmt", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.fmt })));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__wrap._($scope);
	$if_content__quoted._($scope);
	$if_content__keyed._($scope);
	$if_content__templated._($scope);
	$if_content__o_get._($scope);
	$if_content__o_._($scope);
	$if_content__tag._($scope);
};
const $if_content__wrap = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "wrap", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], { fn: $scope._.wrap })));
const $if_content__quoted = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "quoted", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/2"], { fn: $scope._.quoted })));
const $if_content__keyed = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "keyed", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/3"], { fn: $scope._.keyed })));
const $if_content__templated = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "templated", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/4"], { fn: $scope._.templated })));
const $if_content__o_get = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill5", "o_get", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/5"], { fn: $scope._.o_get })));
const $if_content__o_ = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill6", "o_0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/6"], { fn: $scope._.o_0 })));
const $if_content__tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill7", "tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/7"], { fn: $scope._.tag })));
const $pattern2 = ($scope, $pattern) => {
	$fmt($scope, $pattern.fmt);
	$wrap($scope, $pattern.wrap);
	$quoted($scope, $pattern.quoted);
	$keyed($scope, $pattern.keyed);
	$templated($scope, $pattern.templated);
};
const $fmt = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "fmt", $if_content__fmt);
const $wrap = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "wrap", $if_content__wrap);
const $quoted = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "quoted", $if_content__quoted);
const $keyed = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "keyed", $if_content__keyed);
const $templated = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "templated", $if_content__templated);
const $o3 = ($scope, o) => {
	$o_get($scope, o.get);
	$o_($scope, o[0]);
};
const $tag2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill7", "tag", $if_content__tag);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$pattern2($scope, {
		fmt: $fmtWrapQuotedKeyedTemplated($scope),
		wrap: $fmtWrapQuotedKeyedTemplated2($scope),
		"quoted": $fmtWrapQuotedKeyedTemplated3($scope),
		["keyed"]: $fmtWrapQuotedKeyedTemplated4($scope),
		[`templated`]: $fmtWrapQuotedKeyedTemplated5($scope)
	});
	$o3($scope, {
		get: $o($scope),
		0: $o2($scope)
	});
	$tag2($scope, $tag($scope));
});
const $o_get = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill5", "o_get", $if_content__o_get);
const $o_ = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill6", "o_0", $if_content__o_);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}`)($template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&`)("D l", "D l", "D l", "D l", "D l", "D l", "D l", "D l"), $if_content__setup);
const $show = _let("show/15", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $fmtWrapQuotedKeyedTemplated5 = ($scope) => (s) => s + "`" + $scope.input_title;
const $fmtWrapQuotedKeyedTemplated4 = ($scope) => (s) => s + "[" + $scope.input_title;
const $fmtWrapQuotedKeyedTemplated3 = ($scope) => (s) => s + "'" + $scope.input_title;
const $fmtWrapQuotedKeyedTemplated2 = ($scope) => function(s) {
	return "(" + s + $scope.input_title + ")";
};
const $fmtWrapQuotedKeyedTemplated = ($scope) => (s) => s + ":" + $scope.input_title;
const $o2 = ($scope) => (s) => s + "0" + $scope.input_title;
const $o = ($scope) => (s) => s + "=" + $scope.input_title;
const $tag = ($scope) => (s) => s + "#" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated5 input_title", $fmtWrapQuotedKeyedTemplated5);
_bind_resume("__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated4 input_title", $fmtWrapQuotedKeyedTemplated4);
_bind_resume("__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated3 input_title", $fmtWrapQuotedKeyedTemplated3);
_bind_resume("__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated2 input_title", $fmtWrapQuotedKeyedTemplated2);
_bind_resume("__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated input_title", $fmtWrapQuotedKeyedTemplated);
_bind_resume("__tests__/template.marko_0/o2 input_title", $o2);
_bind_resume("__tests__/template.marko_0/o input_title", $o);
_bind_resume("__tests__/template.marko_0/tag input_title", $tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
