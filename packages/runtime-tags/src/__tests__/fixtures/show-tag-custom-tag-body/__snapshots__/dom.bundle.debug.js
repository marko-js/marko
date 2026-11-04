// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=t>t</button><span>before${_w0}<!>after</span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` bDb/${_w0}&%l`)("D l");
const $show = /*@__PURE__*/ _show("#text/2");
const $visible = /*@__PURE__*/ _let("visible/3", ($scope) => $show($scope, $scope.visible));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
}));
function $setup($scope) {
	$input_label($scope["#childScope/1"], "new");
	$visible($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
