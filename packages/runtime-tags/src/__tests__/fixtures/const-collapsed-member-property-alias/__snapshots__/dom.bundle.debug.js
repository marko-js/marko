// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $xs = /*@__PURE__*/ _const("xs", ($scope) => $many($scope, $scope.xs.length > 1));
const $many = /*@__PURE__*/ _const("many");
const $xs__OR__many = ($scope) => _text($scope["#text/0"], $scope.many ? $scope.xs.join() : "none");
const $input_list = /*@__PURE__*/ _const("input_list", ($scope) => {
	$xs($scope, $scope.input_list || []);
	$xs__OR__many($scope);
});
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
