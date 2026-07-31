// template.marko
const $template = "<!><!><output><!>/<!></output>";
const $walks = "b%bD%c%l";
_resume_dynamic_tag();
const $detailsTag_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $detailsTag_content__text__OR__textareaTag = /*@__PURE__*/ _or(1, ($scope) => $detailsTag_content__dynamicTag($scope, $scope._.textareaTag, () => ({
	value: $scope._.text,
	valueChange: $valueChange($scope)
})));
const $detailsTag_content__text = /*@__PURE__*/ _closure_get("text", $detailsTag_content__text__OR__textareaTag);
const $detailsTag_content__setup = ($scope) => {
	$detailsTag_content__text($scope);
	$detailsTag_content__textareaTag($scope);
};
const $detailsTag_content__textareaTag = /*@__PURE__*/ _closure_get("textareaTag", $detailsTag_content__text__OR__textareaTag);
const $detailsTag_content = _content_resume("__tests__/template.marko_1_content", "<summary>toggle</summary><!><!>", "b%", $detailsTag_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $detailsTag_content);
const $open__OR__detailsTag = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.detailsTag, () => ({
	open: $scope.open,
	openChange: $openChange($scope)
})));
const $open = /*@__PURE__*/ _let("open/3", ($scope) => {
	_text($scope, "#text/1", $scope.open ? "open" : "closed");
	$open__OR__detailsTag($scope);
});
const $text__closure = /*@__PURE__*/ _closure($detailsTag_content__text);
const $text = /*@__PURE__*/ _let("text/4", ($scope) => {
	_text($scope, "#text/2", $scope.text);
	$text__closure($scope);
});
const $detailsTag = /*@__PURE__*/ _const("detailsTag", $open__OR__detailsTag);
const $textareaTag = /*@__PURE__*/ _const("textareaTag");
function $setup($scope) {
	$open($scope, false);
	$text($scope, "first");
	$detailsTag($scope, "details");
	$textareaTag($scope, "textarea");
}
function $valueChange($scope) {
	return function(next) {
		$text($scope._, next);
	};
}
function $openChange($scope) {
	return function(next) {
		$open($scope, next);
	};
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
_resume("__tests__/template.marko_0/openChange", $openChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
