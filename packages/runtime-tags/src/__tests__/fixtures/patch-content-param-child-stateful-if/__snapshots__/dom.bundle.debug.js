// tags/disclosure.marko
const $template$1 = "<!><!><button>toggle</button>";
const $walks$1 = "b%b b";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/disclosure.marko_1_input_content#0:4/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/disclosure.marko_0_open#5/fill", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/disclosure.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var disclosure_default = /*@__PURE__*/ _template("__tests__/tags/disclosure.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $disclosure_content__input_suffix = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_suffix#0:3/subscribe", "input_suffix/4", ($scope) => _text($scope["#text/0"], $scope._.input_suffix), 0, "__tests__/template.marko_0_input_suffix#3/subscribers", 0);
const $disclosure_content__setup = $disclosure_content__input_suffix;
const $disclosure_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $disclosure_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $disclosure_content($scope));
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($disclosure_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
