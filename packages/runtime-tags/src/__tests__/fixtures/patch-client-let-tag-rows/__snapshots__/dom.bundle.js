// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_label__OR__T__OR__v = /*@__PURE__*/ _fill_join("c0", 2, /*@__PURE__*/ _or_resume("c1", 3, ($scope) => $for_content__dynamicTag($scope, $scope._.g, ($_) => ({ label: $scope.c + $scope._.f })), 2));
const $for_content__input_label = /*@__PURE__*/ _for_closure(0, $for_content__input_label__OR__T__OR__v);
const $for_content__T = /*@__PURE__*/ _init_resume("c6", /*@__PURE__*/ _for_closure(0, $for_content__input_label__OR__T__OR__v));
const $T = fill("c4", /*@__PURE__*/ _let(6, $for_content__T));
const $input_label = fill("c3", /*@__PURE__*/ _const(5, $for_content__input_label));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
