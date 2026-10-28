// tags/badge.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/tags/badge.marko_0_$global_brand#4", ($scope) => _text($scope["#text/0"], $scope.$global.brand), "brand");
const $setup$1 = $setup__$global_brand;
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_plain = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_plain", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_plain ? "span" : badge_default)));
const $if_content__setup = $if_content__input_plain;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_plain($scope, input.plain);
const $input_plain = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_plain", $if_content__input_plain);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
