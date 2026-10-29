// tags/card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $input_label$2 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("c", $template$1, "D l", 0, $input$1);

// tags/big.marko
const $template = "<strong> </strong>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var big_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_label__OR__T = /*@__PURE__*/ _or_resume("d4", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.g, ($_) => ({ label: $scope._.f })));
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__T);
const $if_content__T = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__T);
const $T = fill("d2", /*@__PURE__*/ _let(6, $if_content__T));
const $input_label = fill("d1", /*@__PURE__*/ _const(5, $if_content__input_label));

// tags/v:card.marko.register-default.js
_resumed.c = card_default;

// tags/v:big.marko.register-default.js
_resumed.b = big_default;
