// tags/my-img.marko
const $template$1 = "<img>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-img.marko_0_input", ($scope) => _attrs_script($scope, "#img/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs($scope, "#img/0", $scope.input);
	$input__script($scope);
});
var my_img_default = /* @__PURE__ */ _template("__tests__/tags/my-img.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)(" b");
const $cls__script = _script("__tests__/template.marko_0_cls", ($scope) => _on($scope["#button/0"], "click", function() {
	$cls($scope, $scope.cls === "a" ? "b" : "a");
}));
const $cls = /* @__PURE__ */ _let("cls/2", ($scope) => {
	$input($scope["#childScope/1"], {
		class: $scope.cls,
		src: "x.png",
		alt: "pic"
	});
	$cls__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$cls($scope, "a");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
