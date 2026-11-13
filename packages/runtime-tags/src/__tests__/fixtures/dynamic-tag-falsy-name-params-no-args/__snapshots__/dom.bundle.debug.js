// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $oninputtag_content__$label = ($scope, $label) => _text($scope["#text/0"], void 0 !== $label ? $label : "falsy");
const $oninputtag_content__$params = ($scope, $params2) => $oninputtag_content__$label($scope, $params2[0]);
const $oninputtag_content = _content_resume("__tests__/template.marko_1*content", " ", " ", 0, $oninputtag_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $oninputtag_content);
const $input_tag__OR__on = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.on && $scope.input_tag));
const $on = /*@__PURE__*/ _let("on/5", $input_tag__OR__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__on);
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
