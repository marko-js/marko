// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child/index.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $countbi_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/tags/child/index.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/child/index.marko_1_input_label#0:4/subscribe"), 0);
const $countbi_content__setup = $countbi_content__input_label;
const $countbi_content = /*@__PURE__*/ _content("__tests__/tags/child/index.marko_1*content", " ", " ", $countbi_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $countbi_content);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/child/index.marko_fill1", "count/5", ($scope) => $dynamicTag($scope, $scope.count ? "b" : "i"));
const $setup__script = _script("__tests__/tags/child/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($countbi_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/child/index.marko_fill0", "input_label", $input_label__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);
