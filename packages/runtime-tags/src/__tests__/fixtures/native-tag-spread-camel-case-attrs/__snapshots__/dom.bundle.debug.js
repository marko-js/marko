// template.marko
const $template = "<button>update</button><div tabIndex=0 readOnly>hi</div><svg tabIndex=0 viewBox=\"0 0 10 10\"></svg>";
const $walks = " b b b";
const $rest__script = _script("__tests__/template.marko_0_rest#6", ($scope) => {
	_attrs_script($scope, "#div/1");
	_attrs_script($scope, "#svg/2");
});
const $rest = /*@__PURE__*/ _let("rest/6", ($scope) => {
	_attrs_partial($scope, "#div/1", $scope.rest, {
		tabIndex: 1,
		tabindex: 1,
		readOnly: 1,
		readonly: 1
	});
	_attrs_partial_content($scope, "#svg/2", $scope.rest, {
		tabIndex: 1,
		tabindex: 1,
		viewBox: 1,
		viewbox: 1
	});
	$rest__script($scope);
});
const $input_rest = $rest;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rest($scope, {
		"aria-label": "b",
		tabIndex: 5
	});
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_rest($scope, input.rest);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
