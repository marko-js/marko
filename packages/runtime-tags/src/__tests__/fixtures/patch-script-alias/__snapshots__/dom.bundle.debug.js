// template.marko
const $template = "<h1> </h1>";
const $walks = "D l";
const $setup = () => {};
const $copy = /*@__PURE__*/ _const("copy", ($scope) => $alias($scope, $scope.copy));
const $alias__script = _script("__tests__/template.marko_0_alias#5", ($scope) => document.title = $scope.copy);
const $alias = $alias__script;
const $input_value = $copy;
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
