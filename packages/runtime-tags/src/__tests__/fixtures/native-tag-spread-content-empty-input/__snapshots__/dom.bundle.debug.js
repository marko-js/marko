// tags/other.marko
const $template$3 = "<span>other:<!>:<!></span>";
const $walks$3 = "Db%c%l";
const $setup$3 = () => {};
const $input$3 = ($scope, input) => {
	_text($scope["#text/0"], typeof input);
	$input_name($scope, input.name);
};
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
var other_default = /*@__PURE__*/ _template("__tests__/tags/other.marko", $template$3, $walks$3, 0, $input$3);

// tags/spread.marko
const $template$2 = "<p></p>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input__script$1 = _script("__tests__/tags/spread.marko_0_input#2", ($scope) => _attrs_script($scope, "#p/0"));
const $input$2 = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#p/0", $scope.input);
	$input__script$1($scope);
});
var spread_default = /*@__PURE__*/ _template("__tests__/tags/spread.marko", $template$2, " b", 0, $input$2);

// tags/passthrough.marko
const $template$1 = "<p><!></p>";
const $walks$1 = " D%l";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/passthrough.marko_0_input#3", ($scope) => _attrs_script($scope, "#p/0"));
const $input$1 = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs($scope, "#p/0", $scope.input);
	$input_content($scope, $scope.input.content);
	$input__script($scope);
});
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
var passthrough_default = /*@__PURE__*/ _template("__tests__/tags/passthrough.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => `<button> </button>${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}<!><!>`)($template$2, $template$2, $template$2, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5) => ` D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&%c`)(" b", " b", " b", $walks$1, $walks$1, $walks$1);
const $passthrough_content__x = ($scope, x) => _text($scope["#text/0"], typeof x);
const $passthrough_content__$params = ($scope, $params3) => $passthrough_content__x($scope, $params3[0]);
const $passthrough_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "params:<!>", "b%", 0, $passthrough_content__$params);
const $spread_content__x = ($scope, x) => _text($scope["#text/0"], typeof x);
const $spread_content__$params = ($scope, $params2) => $spread_content__x($scope, $params2[0]);
const $spread_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "params:<!>", "b%", 0, $spread_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/8");
const $input_tag__OR__n = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({
	content: other_default,
	"data-n": $scope.n
})));
const $n = /*@__PURE__*/ _let("n/12", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input$2($scope["#childScope/2"], {
		"data-n": $scope.n,
		content: $spread_content($scope)
	});
	$input$2($scope["#childScope/3"], {
		content: other_default,
		"data-n": $scope.n
	});
	$input$2($scope["#childScope/4"], { content: $scope.n ? other_default : undefined });
	$input$1($scope["#childScope/5"], {
		"data-n": $scope.n,
		content: $passthrough_content($scope)
	});
	$input$1($scope["#childScope/6"], {
		content: other_default,
		"data-n": $scope.n
	});
	$input$1($scope["#childScope/7"], { content: $scope.n ? other_default : undefined });
	$input_tag__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__n);
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
