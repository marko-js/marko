// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $input_start = ($scope, input_start) => $scope.input_start;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	1;
}));
const $setup = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_start($scope, input.start);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
