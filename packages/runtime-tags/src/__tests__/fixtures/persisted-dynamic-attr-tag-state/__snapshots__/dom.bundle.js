// card.marko
const $template = "<section><em> </em><!></section>";
const $walks = "E l%l";
const $input_meta_n = ($scope, input_meta_n) => _text($scope.a, input_meta_n);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => {
	$input_meta($scope, input.meta);
	$input_content($scope, input.content);
};
const $input_meta = ($scope, input_meta) => $input_meta_n($scope, input_meta?.n);
var card_default = /*@__PURE__*/ _template("a", $template, $walks, 0, $input);

// template.marko
const $inputonCardnull_content__input_label = /*@__PURE__*/ _fill_join_closure("b1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.f)), 0);
const $inputonCardnull_content = _content_resume("b0", " ", " ", $inputonCardnull_content__input_label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputonCardnull_content);
const $input_on__OR__count = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.e ? card_default : null, () => ({ meta: attrTag({ n: $scope.g }) }))));
const $count = /*@__PURE__*/ _let(6, $input_on__OR__count);
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
