// template.marko
const $MyButton_content__walks = " c", $MyButton_content__template = "<button></button> ";
const $template = /* @__PURE__ */ ((_w0) => `<div id=el></div>${_w0}<!>`)($MyButton_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($MyButton_content__walks);
const $MyButton_content2 = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "Click Me", "b");
const $MyButton_content__input_onClick__script = _script("__tests__/template.marko_1_input_onClick", ($scope) => _on($scope["#button/0"], "click", function() {
	document.getElementById("el").textContent += "[onClick(child)]";
	$scope.input_onClick();
}));
const $MyButton_content__input_onClick = /* @__PURE__ */ _const("input_onClick", $MyButton_content__input_onClick__script);
const $MyButton_content__input__script = _script("__tests__/template.marko_1_input", ($scope) => _attrs_script($scope, "#button/0"));
const $MyButton_content__input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_partial_content($scope, "#button/0", $scope.input, { "on-click": 1 });
	$MyButton_content__input_onClick($scope, $scope.input.onClick);
	$MyButton_content__input__script($scope);
});
const $MyButton_content__$params = ($scope, $params2) => $MyButton_content__input($scope, $params2[0]);
function $setup($scope) {
	$MyButton_content__input($scope["#childScope/0"], {
		"on-click": $onclick,
		onClick: $onClick,
		content: $MyButton_content2($scope)
	});
}
function $onClick() {
	document.getElementById("el").textContent += "[onClick(parent)]";
}
function $onclick() {
	throw new Error("Should never be called.");
}
_resume("__tests__/template.marko_0/onClick", $onClick);
_resume("__tests__/template.marko_0/onclick", $onclick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
