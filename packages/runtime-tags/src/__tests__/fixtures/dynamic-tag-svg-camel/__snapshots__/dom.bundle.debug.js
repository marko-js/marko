// template.marko
const $template = "<svg width=20 height=20><!></svg><div> </div>";
const $walks = "D%lD l";
_resume_dynamic_tag();
const $inputtag_content = _content_resume("__tests__/template.marko_1*content", "<stop offset=0%></stop>");
const $n = /*@__PURE__*/ _let("n/5", ($scope) => _text($scope["#text/1"], $scope.n));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag__OR__attrs = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({
	...$scope.attrs,
	id: "g"
})));
const $attrs2 = /*@__PURE__*/ _const("attrs", $input_tag__OR__attrs);
function $setup($scope) {
	$n($scope, 0);
	$attrs2($scope, { onClick: $attrs($scope) });
}
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__attrs);
const $input = ($scope, input) => $input_tag($scope, input.tag);
function $attrs($scope) {
	return function() {
		$n($scope, 1);
	};
}
_resume("__tests__/template.marko_0/attrs", $attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
