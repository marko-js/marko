// template.marko
const $template = "<button> </button><p></p>";
const $walks = " D l b";
const $clicks = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "clicks/6", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$clicks($scope, 0);
}
const $input_label__script = _script("__tests__/template.marko_0_input_label#5", ($scope) => {
	_el_read($scope["#p/2"]).dataset.label = $scope.input_label;
	_el_read($scope["#button/0"]).addEventListener("click", () => {
		_el_read($scope["#p/2"]).textContent += "x";
	}, { signal: $signal($scope, 0) });
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$signalReset($scope, 0);
	$input_label__script($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
