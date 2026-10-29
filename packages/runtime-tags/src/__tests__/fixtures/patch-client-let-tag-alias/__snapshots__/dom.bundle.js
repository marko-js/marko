// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__U = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({ label: $scope.e })));
const $T = fill("c1", /*@__PURE__*/ _let(5, $input_label__OR__U));
const $input_label = fill("c0", /*@__PURE__*/ _const(4, $input_label__OR__U));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
