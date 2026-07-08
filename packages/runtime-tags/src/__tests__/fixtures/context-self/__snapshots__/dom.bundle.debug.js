// tags/labeled-region.marko
const $template$1 = "<!><button>toggle</button><!><!>";
const $walks$1 = "b b%c";
const $context_label = _context_closure("__tests__/tags/labeled-region.marko", ($scope2, $provider) => $if_content__label($scope2, $provider["#ContextValue"]), "__tests__/tags/labeled-region.marko_1_label/context", "<labeled-region>");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = ($scope) => {
	$if_content__input_content._($scope);
	$context_label($scope);
};
const $if_content__label = /*@__PURE__*/ _const("label", ($scope) => _text($scope["#text/1"], $scope.label));
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><div class=region-label> </div>", "b%bD l", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/labeled-region.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	_context_branch($scope, "__tests__/tags/labeled-region.marko");
	$open($scope, true);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_attr_class($scope["#button/0"], `toggle-${$scope.input_label}`);
	_context_value($scope, $scope.input_label, "__tests__/tags/labeled-region.marko");
});
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var labeled_region_default = /*@__PURE__*/ _template("__tests__/tags/labeled-region.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $labeledregion_content2 = _content_resume("__tests__/template.marko_2_content", "<span>content</span>", "b");
const $labeledregion_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $labeledregion_content2($scope));
	$input_label($scope["#childScope/0"], "inner");
};
const $labeledregion_content = _content_resume("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $labeledregion_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $labeledregion_content($scope));
	$input_label($scope["#childScope/0"], "outer");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
