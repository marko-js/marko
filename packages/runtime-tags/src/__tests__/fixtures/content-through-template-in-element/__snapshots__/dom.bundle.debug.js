// tags/inner.marko
const $template$2 = "<b><!></b>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "D%l", 0, $input$1);

// tags/mid.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<p>x${_w0}</p>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db/${_w0}&l`)("D%l");
const $setup$1 = ($_) => {};
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/0"], input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div><button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l b`)($walks$1);
const $mid_content__n = /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:2/subscribe");
const $mid_content__setup = $mid_content__n;
const $mid_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $mid_content__setup);
const $n__closure = /*@__PURE__*/ _closure($mid_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content($scope["#childScope/0"], $mid_content($scope));
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
