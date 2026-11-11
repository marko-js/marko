// template.marko
const $template = "<div></div><section></section><!><!><button></button>";
const $walks = " b b%b%b b";
const $inputtag_content__$label = ($scope, $label2) => _text($scope["#text/0"], void 0 !== $label2 ? $label2 : "body");
const $inputtag_content__$params = ($scope, $params4) => $inputtag_content__$label($scope, $params4[0]);
const $inputtag_content = _content("__tests__/template.marko_3*content", " ", " ", 0, $inputtag_content__$params);
const $Count_content__$pattern = ($scope, $pattern2) => _text($scope["#text/0"], $pattern2.count);
const $Count_content__$pattern2 = ($scope, $pattern) => $Count_content__$pattern($scope, void 0 !== $pattern ? $pattern : { count: 1 });
const $Count_content__$params = ($scope, $params3) => $Count_content__$pattern2($scope, $params3[0]);
const $Count_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $Count_content__$params);
const $Label_content__$label = ($scope, $label) => _text($scope["#text/0"], void 0 !== $label ? $label : "none");
const $Label_content__$params = ($scope, $params2) => $Label_content__$label($scope, $params2[0]);
const $Label_content = _content("__tests__/template.marko_1*content", "<i> </i>", "D ", 0, $Label_content__$params);
const $on__OR__Label__OR__Count__script = _script("__tests__/template.marko_0_on#8_Label#9_Count#11", ($scope) => _attrs_script($scope, "#section/1"));
const $on__OR__Label__OR__Count = /*@__PURE__*/ _or(12, ($scope) => {
	_attr_content($scope, "#div/0", $scope.on ? $scope.Label : $scope.Count);
	_attrs_content($scope, "#section/1", $scope.on ? { content: $scope.Count } : { content: $scope.Label });
	$on__OR__Label__OR__Count__script($scope);
}, 2);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_tag__OR__on__OR__Label_content__OR__Count_content = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag2($scope, $scope.input_tag, ($_) => ({ content: $scope.on ? $scope.Label_content : $scope.Count_content })), 3);
const $on = /*@__PURE__*/ _let("on/8", ($scope) => {
	$on__OR__Label__OR__Count($scope);
	$input_tag__OR__on__OR__Label_content__OR__Count_content($scope);
});
const $Label = /*@__PURE__*/ _const("Label", ($scope) => {
	$Label_content2($scope, $scope.Label.content);
	$on__OR__Label__OR__Count($scope);
});
const $Count = /*@__PURE__*/ _const("Count", ($scope) => {
	$Count_content2($scope, $scope.Count.content);
	$on__OR__Label__OR__Count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$Label($scope, { content: $Label_content($scope) });
	$Count($scope, { content: $Count_content($scope) });
	$setup__script($scope);
}
const $Label_content2 = /*@__PURE__*/ _const("Label_content", $input_tag__OR__on__OR__Label_content__OR__Count_content);
const $Count_content2 = /*@__PURE__*/ _const("Count_content", $input_tag__OR__on__OR__Label_content__OR__Count_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputtag_content);
const $input_tag = /*@__PURE__*/ _const("input_tag", ($scope) => {
	$dynamicTag($scope, $scope.input_tag);
	$input_tag__OR__on__OR__Label_content__OR__Count_content($scope);
});
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
