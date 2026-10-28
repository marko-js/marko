// tags/card.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("b", $template, "D%l", 0, $input);

// tags/outer.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $o__OR__T = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.g, ($_) => ({ content: $scope.f })));
const $o = /*@__PURE__*/ _let(5, $o__OR__T);
const $T = /*@__PURE__*/ _let(6, $o__OR__T);
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
	$T($scope, card_default);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0");
const $outer_content = _content("a1", "<em>static <!></em>", "Db%", $outer_content__input_label);
