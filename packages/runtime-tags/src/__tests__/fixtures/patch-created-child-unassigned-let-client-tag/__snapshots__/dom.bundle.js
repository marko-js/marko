// tags/card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_label__OR__T = /*@__PURE__*/ _fill_join("c0", 4, /*@__PURE__*/ _or_resume("c1", 6, ($scope) => "f" in $scope && $dynamicTag($scope, $scope.f, ($_) => ({ label: $scope.e }))));
const $T = /*@__PURE__*/ _let(5, $input_label__OR__T);
const $input_tag = $T;

// template.marko
const $if_content__which = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_tag($scope.a, $scope._.g)));
const $which = /*@__PURE__*/ _let(6, $if_content__which);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$which($scope, card_default);
}));
