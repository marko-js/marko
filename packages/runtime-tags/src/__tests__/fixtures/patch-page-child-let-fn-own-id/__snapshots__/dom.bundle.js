// tags/card.marko
const $template = "<span>card</span>";
const $walks = "b";
var card_default = /*@__PURE__*/ _template("b", $template, "b");

// tags/outer.marko
const $input_label__OR__obj = /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.f.f($scope.e)));
const $obj = fill("c1", /*@__PURE__*/ _let(5, $input_label__OR__obj));
const $input_label = fill("c0", /*@__PURE__*/ _const(4, $input_label__OR__obj));

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
