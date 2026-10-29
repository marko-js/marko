// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_label__OR__T = /*@__PURE__*/ _fill_join_if("c2", 5, /*@__PURE__*/ _or_resume("c5", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.g, ($_) => ({ label: $scope._.f }))), 1, 0);
const $if_content__T = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_label__OR__T);
const $T = /*@__PURE__*/ _fill_let("c3", 6, $if_content__T);
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$T($scope, void 0);
}));

// tags/v:card.marko.register-default.js
_resumed.b = card_default;
