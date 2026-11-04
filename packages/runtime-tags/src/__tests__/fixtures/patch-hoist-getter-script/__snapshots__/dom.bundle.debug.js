// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $label_getter = /*@__PURE__*/ _hoist("label");
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $label2 = /*@__PURE__*/ _const("label", ($scope) => _assert_hoist($scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => document.querySelector("p").dataset.label = $label_getter($scope)());
function $setup($scope) {
	$label2($scope, $label);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
function $label() {
	return "ready";
}
_resumed["__tests__/template.marko_0/label"] = $label;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
