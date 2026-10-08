// template.marko
const $template = "<!><!><p> </p><!><button> </button>";
const $walks = "b%bD l%b D l";
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/9", ($scope) => _text($scope["#text/4"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $show = /*@__PURE__*/ _show("#text/2", "#text/0");
const $input_on = $show;
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
