// tags/my-button.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $onClick__script = _script("__tests__/tags/my-button.marko_0_onClick", ($scope) => _on($scope["#button/0"], "click", $scope.onClick));
const $onClick$1 = /* @__PURE__ */ _const("onClick", $onClick__script);
const $text = ($scope, text) => _text($scope["#text/1"], text);
const $input = ($scope, input) => {
	$text($scope, input.text);
	$onClick$1($scope, input.onClick);
};
var my_button_default = /* @__PURE__ */ _template("__tests__/tags/my-button.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $clickCount = /* @__PURE__ */ _let("clickCount/1", ($scope) => {
	$text($scope["#childScope/0"], $scope.clickCount);
	$onClick$1($scope["#childScope/0"], $onClick($scope));
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$clickCount($scope, 0);
}
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.clickCount + 1);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
