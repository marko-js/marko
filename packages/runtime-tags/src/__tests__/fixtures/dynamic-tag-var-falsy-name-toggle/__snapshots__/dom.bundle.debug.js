// template.marko
const $template = "<!><!><!><!><p><!> <!> <!></p><input><button id=toggle></button>";
const $walks = "b1b1b1bD%c%c%l b b";
_dynamic_tag_var_resume("#text/0");
_dynamic_tag_var_resume("#text/2");
_dynamic_tag_var_resume("#text/4");
const $labelspan_content__setup = ($scope) => {
	_return($scope, 1);
};
const $labelspan_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", 0, 0, /*@__PURE__*/ _return_setup($labelspan_content__setup));
const $labelbutton_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "content");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $labelbutton_content, () => $btn);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", $labelspan_content, () => $value);
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/4", 0, () => $other);
const $label = /*@__PURE__*/ _let("label/11", ($scope) => {
	_attr_input_value_default($scope, "#input/9", $scope.label);
	$dynamicTag($scope, $scope.label && "button", () => ({ "aria-label": $scope.label }));
	$dynamicTag2($scope, $scope.label && "span");
	$dynamicTag3($scope, !$scope.label && "span");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/10"], "click", function() {
	$label($scope, $scope.label ? "" : "Close");
}));
function $setup($scope) {
	$label($scope, "Close");
	$setup__script($scope);
}
const $btn = _var_resume("__tests__/template.marko_0_btn#12/var", ($scope, btn) => _text($scope["#text/6"], typeof btn));
const $value = _var_resume("__tests__/template.marko_0_value#13/var", ($scope, value) => _text($scope["#text/7"], typeof value));
const $other = _var_resume("__tests__/template.marko_0_other#14/var", ($scope, other) => _text($scope["#text/8"], typeof other));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
