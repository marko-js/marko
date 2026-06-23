// template.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = () => {};
const $input_foo__OR__input_bar = /* @__PURE__ */ _or(5, ($scope) => _attr($scope["#div/0"], "nested", `a ${$scope.input_foo + ` nested ${$scope.input_bar}`} b`));
const $input_foo = /* @__PURE__ */ _const("input_foo", ($scope) => {
	_attr_class($scope["#div/0"], $scope.input_foo);
	_attr($scope["#div/0"], "foo", "a" + $scope.input_foo + "b");
	$input_foo__OR__input_bar($scope);
});
const $input_bar = /* @__PURE__ */ _const("input_bar", ($scope) => {
	_attr($scope["#div/0"], "bar", `a ${$scope.input_bar} b`);
	$input_foo__OR__input_bar($scope);
});
const $input = ($scope, input) => {
	$input_foo($scope, input.foo);
	$input_bar($scope, input.bar);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
