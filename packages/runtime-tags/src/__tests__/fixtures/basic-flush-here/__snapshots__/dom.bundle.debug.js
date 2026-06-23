// template.marko
const $template = "<h1>Hello World</h1>";
const $walks = "b";
function $setup($scope) {
	$scope.$global.__flush__ = ($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`;
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b", $setup);
