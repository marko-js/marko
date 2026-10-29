// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $input_label__OR__v = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.g.fmt($scope.f)));
const $v = fill("c1", /*@__PURE__*/ _let(6, ($scope) => {
	$v_tag($scope, $scope.g?.tag);
	$input_label__OR__v($scope);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__v_tag = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.i, ($_) => ({ label: $scope.f })));
const $v_tag = /*@__PURE__*/ _const(8, $input_label__OR__v_tag);
const $input_label = fill("c0", /*@__PURE__*/ _const(5, ($scope) => {
	$input_label__OR__v_tag($scope);
	$input_label__OR__v($scope);
}));

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
