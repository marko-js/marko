// template.marko
const $template = "<div></div><div></div><div></div><div></div><div class=base></div>";
const $walks = " b b b b b";
function $setup($scope) {
	_attr_class_item($scope["#div/0"], _class_module_value(styles_module_default.card, "card"), 1);
	_attr_class_item($scope["#div/3"], _class_module_value(styles_module_default.card, "card"), 1);
	_attr_class_item($scope["#div/4"], _class_module_value(styles_module_default.card, "card"), 1);
}
const $active = /* @__PURE__ */ _const("active", ($scope) => {
	_attr_class_item($scope["#div/0"], _class_module_value(styles_module_default.on, "on"), $scope.active);
	_attr_class_item($scope["#div/1"], _class_module_value(styles_module_default.on, "on"), $scope.active);
	_attr_class_item($scope["#div/3"], _class_module_value(styles_module_default.on, "on"), $scope.active);
	_attr_class_item($scope["#div/4"], _class_module_value(styles_module_default.on, "on"), $scope.active);
});
const $input_x__OR__input_y = /* @__PURE__ */ _or(10, ($scope) => _attr_class_items($scope["#div/2"], {
	[_class_module_value(styles_module_default.a, "a")]: $scope.x,
	[_class_module_value(styles_module_default.b, "b")]: $scope.y
}));
const $x = /* @__PURE__ */ _const("x", $input_x__OR__input_y);
const $y = /* @__PURE__ */ _const("y", $input_x__OR__input_y);
const $input = ($scope, input) => {
	$active($scope, input.active);
	$x($scope, input.x);
	$y($scope, input.y);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// styles.module.css
var styles_module_default = ".card {\n  color: green;\n}\n.on {\n  color: blue;\n}\n.a {\n  color: red;\n}\n.b {\n  color: teal;\n}\n";
