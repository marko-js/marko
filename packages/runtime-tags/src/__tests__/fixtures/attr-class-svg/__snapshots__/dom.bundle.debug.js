// template.marko
const $template = "<svg class=icon><circle cx=50 cy=50 r=40></circle></svg>";
const $walks = " D l";
const $setup = () => {};
const $active = /*@__PURE__*/ _const("active", ($scope) => {
	_attr_class_item($scope["#svg/0"], "active", $scope.active);
	_attr_class($scope["#circle/1"], $scope.active ? "on" : "off");
});
const $input = ($scope, input) => $active($scope, input.active);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
