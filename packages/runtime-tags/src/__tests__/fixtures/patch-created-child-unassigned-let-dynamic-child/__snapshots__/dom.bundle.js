// tags/card.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("b", $template, "D%l", 0, $input);

// tags/v:card.marko.register-default.js
_resumed.b = card_default;

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $o__OR__T = /*@__PURE__*/ _or_resume("c1", 6, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({ content: $scope.e })));
const $o = fill("c0", /*@__PURE__*/ _let(4, $o__OR__T));
