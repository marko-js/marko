// tags/my-button.marko
const $template$1 = "<button><!></button>";
const $walks$1 = " D%l";
const $setup$1 = () => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $onClick__script = _script("__tests__/tags/my-button.marko_0_onClick", ($scope) => _on($scope["#button/0"], "click", $scope.onClick));
const $onClick$1 = /*@__PURE__*/ _const("onClick", $onClick__script);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $content = $dynamicTag;
const $input = ($scope, input) => {
	$onClick$1($scope, input.onClick);
	$content($scope, input.content);
};
var my_button_default = /*@__PURE__*/ _template("__tests__/tags/my-button.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $mybutton_content__clickCount = /*@__PURE__*/ _closure_get("clickCount", ($scope) => _text($scope["#text/0"], $scope._.clickCount));
const $mybutton_content__setup = $mybutton_content__clickCount;
const $mybutton_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", " ", " b", $mybutton_content__setup);
const $clickCount__closure = /*@__PURE__*/ _closure($mybutton_content__clickCount);
const $clickCount = /*@__PURE__*/ _let("clickCount/1", ($scope) => {
	$onClick$1($scope["#childScope/0"], $onClick($scope));
	$clickCount__closure($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $mybutton_content($scope));
	$clickCount($scope, 0);
}
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.clickCount + 1);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
