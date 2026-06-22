// tags/FancyButton.marko
const $template$1 = "<button><!></button>";
const $walks$1 = " D%l";
const $setup$1 = () => {};
const $content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/1");
const $attrs__script = _script("__tests__/tags/FancyButton.marko_0_attrs", ($scope) => _attrs_script($scope, "#button/0"));
const $attrs = /* @__PURE__ */ _const("attrs", ($scope) => {
	_attrs($scope, "#button/0", $scope.attrs);
	$attrs__script($scope);
});
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $content = ($scope, content) => $dynamicTag($scope, content);
const $input = ($scope, input) => {
	(({ content, ...attrs }) => $attrs($scope, attrs))(input);
	$content($scope, input.content);
};
var FancyButton_default = /* @__PURE__ */ _template("__tests__/tags/FancyButton.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $FancyButton_content__clickCount = /* @__PURE__ */ _closure_get("clickCount", ($scope) => _text($scope["#text/0"], $scope._.clickCount));
const $FancyButton_content__setup = $FancyButton_content__clickCount;
const $FancyButton_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", " ", " b", $FancyButton_content__setup);
const $clickCount__closure = /* @__PURE__ */ _closure($FancyButton_content__clickCount);
const $clickCount = /* @__PURE__ */ _let("clickCount/1", ($scope) => {
	$attrs($scope["#childScope/0"], { onClick: $onClick($scope) });
	$clickCount__closure($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $FancyButton_content($scope));
	$clickCount($scope, 0);
}
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.clickCount + 1);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
