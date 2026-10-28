// tags/badge.marko
const $template = "<em> </em>";
const $walks = "D l";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("b0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $setup = $setup__$global_brand;
var badge_default = /*@__PURE__*/ _template("b", $template, "D l", $setup);

// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_plain = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e ? "span" : badge_default)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_plain);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
