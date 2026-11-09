// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_list_length__OR__list = ($scope) => _text($scope["#text/0"], $scope.input_list_length + $scope.input_list.filter((item) => item.on).length + $scope.input_list.length);
const $input_list = /*@__PURE__*/ _const("input_list", ($scope) => {
	$input_list_length($scope, $scope.input_list?.length);
	$input_list_length__OR__list($scope);
});
const $input_list_length = /*@__PURE__*/ _const("input_list_length");
const $input = ($scope, input) => $input_list($scope, input.list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
