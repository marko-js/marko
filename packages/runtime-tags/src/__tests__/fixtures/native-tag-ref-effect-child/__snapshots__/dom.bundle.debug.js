// tags/hello-setter.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $el__script = _script("__tests__/tags/hello-setter.marko_0_el", ($scope) => $scope.el().textContent = "hello");
const $el = /* @__PURE__ */ _const("el", $el__script);
const $input = ($scope, input) => $el($scope, input.el);
var hello_setter_default = /* @__PURE__ */ _template("__tests__/tags/hello-setter.marko", "", "", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<div></div>${_w0}`)("");
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)("");
const $el_getter = _el("__tests__/template.marko_0_#div", "#div/0");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$el($scope["#childScope/1"], $el_getter($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
