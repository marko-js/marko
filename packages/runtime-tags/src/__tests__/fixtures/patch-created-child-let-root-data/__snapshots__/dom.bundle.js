// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $if_content__T = /*@__PURE__*/ _init_resume("c4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.h ? "has" : "none")));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__T = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.h, ($_) => ({ label: $scope.g })));
const $T = fill("c2", /*@__PURE__*/ _let(7, ($scope) => {
	$input_label__OR__T($scope);
	$if_content__T($scope);
}));
const $input_label = fill("c1", /*@__PURE__*/ _const(6, $input_label__OR__T));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
