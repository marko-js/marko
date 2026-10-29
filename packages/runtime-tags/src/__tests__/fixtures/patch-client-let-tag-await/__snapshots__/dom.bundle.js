// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content__T__OR__v = /*@__PURE__*/ _fill_join("c0", 2, /*@__PURE__*/ _or(3, ($scope) => $await_content__dynamicTag($scope, $scope._.f, ($_) => ({ label: $scope.c }))));
const $await_content__T = /*@__PURE__*/ _init_resume("c5", /*@__PURE__*/ _closure_get(6, $await_content__T__OR__v));
const $T = fill("c3", /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($await_content__T)));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
