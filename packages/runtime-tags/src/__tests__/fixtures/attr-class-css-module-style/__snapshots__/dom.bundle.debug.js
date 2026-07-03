// template.marko
const $template = "<div></div><div></div>";
const $walks = " b b";
function $setup($scope) {
	_attr_class_item($scope["#div/0"], _class_module_value(void 0, "card"), 1);
	_attr_class_item($scope["#div/1"], _class_module_value(void 0, "card"), 1);
}
const $active = /* @__PURE__ */ _const("active", ($scope) => {
	_attr_class_item($scope["#div/0"], _class_module_value(void 0, "on"), $scope.active);
	_attr_class_item($scope["#div/1"], _class_module_value(void 0, "on"), $scope.active);
});
const $input = ($scope, input) => $active($scope, input.active);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:template.marko.module.css
var v_template_marko_module_default = "\n  .card { color: green }\n  .on { color: blue }\n";
