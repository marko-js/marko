// components/custom-tag.marko
const $template = "<button class=inc><!>,<!></button><!><!>";
const $walks = " D%c%l%c";
const $x__OR__y__script = _script("__tests__/components/custom-tag.marko_0_x_y", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
	$y($scope, $scope.y + 1);
}));
const $x__OR__y = /* @__PURE__ */ _or(9, $x__OR__y__script);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/3", 0, 0, 1);
const $input_content__OR__x__OR__y = /* @__PURE__ */ _or(10, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.x, $scope.y]), 2);
const $x = /* @__PURE__ */ _let("x/7", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let("y/8", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
function $setup($scope) {
	$x($scope, 1);
	$y($scope, 10);
}
const $input_content = /* @__PURE__ */ _const("input_content", $input_content__OR__x__OR__y);
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /* @__PURE__ */ _template("__tests__/components/custom-tag.marko", $template, $walks, $setup, $input);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
