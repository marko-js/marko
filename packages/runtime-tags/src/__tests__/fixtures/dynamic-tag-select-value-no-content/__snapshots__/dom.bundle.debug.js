// template.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
_resume_dynamic_tag();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $tag__OR__v = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.tag, () => ({
	value: $scope.v,
	valueChange: $valueChange($scope)
})));
const $tag = /*@__PURE__*/ _let("tag/5", $tag__OR__v);
const $input_tag = $tag;
const $v = /*@__PURE__*/ _let("v/6", ($scope) => {
	_text($scope["#text/1"], $scope.v);
	$tag__OR__v($scope);
});
function $setup($scope) {
	$v($scope, "");
}
const $input = ($scope, input) => $input_tag($scope, input.tag);
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
