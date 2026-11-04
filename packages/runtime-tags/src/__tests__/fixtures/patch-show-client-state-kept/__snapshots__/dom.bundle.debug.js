// template.marko
const $template = "<button>toggle</button><p> </p><!><!>";
const $walks = " bD l%c";
const $show = /*@__PURE__*/ _show("#text/2");
const $open = _let("open/6", ($scope) => $show($scope, $scope.open));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
