// card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/2", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/card.marko_0_$global_brand#4/subscribe", $global_brand_key, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $setup$1 = $global_brand;
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? card_default : null);
const $input = ($scope, input) => $input_on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
