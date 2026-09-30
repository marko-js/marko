// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = () => {};
const $xs = /*@__PURE__*/ _const("xs", ($scope) => $xs_length($scope, $scope.xs.length));
const $many = /*@__PURE__*/ _const("many");
const $xs_length = ($scope, xs_length) => $many($scope, xs_length > 1);
const $xs__OR__many = ($scope) => {
	_text($scope["#text/0"], $scope.many ? $scope.xs.join() : "none");
};
const $input_list = /*@__PURE__*/ _const("input_list", ($scope) => {
	$xs($scope, $scope.input_list || []);
	$xs__OR__many($scope);
});
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
