// tags/frag-host.marko
const $template$1 = "<section></section><div id=partial></div>";
const $walks$1 = " b b";
const $one_content = _content_resume("__tests__/tags/frag-host.marko_2*content", "<em>one</em>");
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe", "input_b/11", ($scope) => _text($scope["#text/0"], $scope._.input_b), 0, "__tests__/tags/frag-host.marko_0_input_b#4/subscribers", 0);
const $two_content__setup = $two_content__input_b;
const $two_content = _content_resume("__tests__/tags/frag-host.marko_1*content", "<strong> </strong>", "D ", $two_content__setup);
const $sectionAttrs__script = _script("__tests__/tags/frag-host.marko_0_sectionAttrs#9", ($scope) => _attrs_script($scope, "#section/0"));
const $sectionAttrs = /*@__PURE__*/ _const("sectionAttrs", ($scope) => {
	$sectionAttrs__script($scope);
	_attrs_content($scope, "#section/0", $scope.sectionAttrs);
});
const $divAttrs__script = _script("__tests__/tags/frag-host.marko_0_divAttrs#10", ($scope) => _attrs_script($scope, "#div/1"));
const $divAttrs = /*@__PURE__*/ _const("divAttrs", ($scope) => {
	$divAttrs__script($scope);
	_attrs_partial_content($scope, "#div/1", $scope.divAttrs, { id: 1 });
});
const $input_mode__OR__one__OR__two = /*@__PURE__*/ _or_patch("__tests__/tags/frag-host.marko_0_input_mode#5_one#6_two#7/setup", 8, ($scope) => {
	$sectionAttrs($scope, { content: $scope.input_mode ? $scope.one : $scope.two });
	$divAttrs($scope, { content: $scope.input_mode ? $scope.two : $scope.one });
}, 2);
const $one = /*@__PURE__*/ _const("one", $input_mode__OR__one__OR__two);
const $two = /*@__PURE__*/ _const("two", $input_mode__OR__one__OR__two);
function $setup$1($scope) {
	$one($scope, { content: $one_content($scope) });
	$two($scope, { content: $two_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__one__OR__two);
const $input$1 = ($scope, input) => {
	$input_b$1($scope, input.b);
	$input_mode($scope, input.mode);
};
const $input_b__closure = /*@__PURE__*/ _closure($two_content__input_b);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_b__closure);
var frag_host_default = /*@__PURE__*/ _template("__tests__/tags/frag-host.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $mode = _let("mode/5", ($scope) => $input_mode($scope["#childScope/1"], $scope.mode));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mode($scope, !$scope.mode);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$mode($scope, false);
	$setup__script($scope);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
