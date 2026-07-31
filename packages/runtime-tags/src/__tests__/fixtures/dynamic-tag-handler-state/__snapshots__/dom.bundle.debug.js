// template.marko
const $template = "<!><!><!><!><div> </div>";
const $walks = "b%b%b%bD l";
_resume_dynamic_tag();
const $inputtag_content3 = _content_resume("__tests__/template.marko_3*content", "aliased");
const $inputtag_content2 = _content_resume("__tests__/template.marko_2*content", "inline");
const $inputtag_content = _content_resume("__tests__/template.marko_1*content", "spread");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag__OR__attrs = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({
	...$scope.attrs,
	id: "spread"
})));
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/2", $inputtag_content3);
const $input_tag__OR__aliased = /*@__PURE__*/ _or(11, ($scope) => $dynamicTag3($scope, $scope.input_tag, () => ({
	...$scope.attrs,
	id: "aliased"
})));
const $attrs2 = /*@__PURE__*/ _const("attrs", ($scope) => {
	$input_tag__OR__attrs($scope);
	$input_tag__OR__aliased($scope);
});
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $inputtag_content2);
const $input_tag__OR__n = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag2($scope, $scope.input_tag, () => ({
	onClick: $onClick($scope),
	id: "inline"
})));
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope, "#text/3", $scope.n);
	$attrs2($scope, { onClick: $attrs($scope) });
	$input_tag__OR__n($scope);
});
function $setup($scope) {
	$n($scope, 0);
}
const $input_tag = /*@__PURE__*/ _const("input_tag", ($scope) => {
	$input_tag__OR__attrs($scope);
	$input_tag__OR__n($scope);
	$input_tag__OR__aliased($scope);
});
const $input = ($scope, input) => $input_tag($scope, input.tag);
const $attrs = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
const $onClick = ($scope) => function() {
	$n($scope, $scope.n + 10);
};
_resume("__tests__/template.marko_0/attrs", $attrs);
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
