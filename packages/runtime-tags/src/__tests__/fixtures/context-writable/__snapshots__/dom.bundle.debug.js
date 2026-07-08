// tags/add-button.marko
const $template$3 = "<!><button class=add>add</button>";
const $walks$3 = "b b";
const $context_count$1 = _context_closure("__tests__/tags/count-provider.marko", ($scope2, $provider) => $count$2($scope2, $provider["#ContextValue"]), "__tests__/tags/add-button.marko_0_count/context", "<count-provider>");
const $count$2 = /*@__PURE__*/ _const("count");
const $setup__script = _script("__tests__/tags/add-button.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	_context_write($scope, "__tests__/tags/count-provider.marko", $scope.count + 1);
}));
function $setup$3($scope) {
	$context_count$1($scope);
	$setup__script($scope);
}
var add_button_default = /*@__PURE__*/ _template("__tests__/tags/add-button.marko", $template$3, "b b", $setup$3);

// tags/count-display.marko
const $template$2 = "<!><span class=display> </span>";
const $walks$2 = "bD l";
const $context_count = _context_closure("__tests__/tags/count-provider.marko", ($scope2, $provider) => $count$1($scope2, $provider["#ContextValue"]), "__tests__/tags/count-display.marko_0_count/context", "<count-provider>");
const $count$1 = /*@__PURE__*/ _const("count", ($scope) => _text($scope["#text/0"], $scope.count));
const $setup$2 = $context_count;
var count_display_default = /*@__PURE__*/ _template("__tests__/tags/count-display.marko", $template$2, $walks$2, $setup$2);

// tags/count-provider.marko
const $template$1 = "<!><!><div class=provider-count> </div>";
const $walks$1 = "b%bD l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	_context_value($scope, $scope.count, "__tests__/tags/count-provider.marko");
	_text($scope["#text/1"], $scope.count);
});
function $setup$1($scope) {
	_context_branch($scope, "__tests__/tags/count-provider.marko");
	_context_change($scope, $valueChange($scope));
	$count($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/tags/count-provider.marko_0/valueChange", $valueChange);
var count_provider_default = /*@__PURE__*/ _template("__tests__/tags/count-provider.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $countprovider_content__setup = ($scope) => {
	$setup$3($scope["#childScope/0"]);
	$setup$2($scope["#childScope/1"]);
};
const $countprovider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$3, $template$2), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)("b b", $walks$2), $countprovider_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $countprovider_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
