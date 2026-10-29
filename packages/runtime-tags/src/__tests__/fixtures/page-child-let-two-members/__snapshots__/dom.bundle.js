// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/v:card.marko.register-default.js
_resumed.b = card_default;

// template.marko
function $fn(v) {
	return "f-" + v;
}
function $other(v) {
	return "g-" + v;
}
_resumed.a0 = $fn;
_resumed.a1 = $other;
