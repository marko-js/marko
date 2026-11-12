// template.marko
const $template = "<button> </button><pre></pre>";
const $walks = " D l b";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/6", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#6/subscribe", $global_brand_key);
const $count__OR__$global_brand = /*@__PURE__*/ _global_or(4, ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand")), $global_brand);
const $count = _let("count/3", $count__OR__$global_brand);
const $global_key = /*@__PURE__*/ _global_key("$global/5/5");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#5/subscribe", $global_key, ($scope) => $global2__script($scope));
const $global2__script = _global_script("__tests__/template.marko_0_$global#5", ($scope) => _el_read($scope["#pre/2"]).textContent = JSON.stringify($scope.$global), $global2);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global2($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
