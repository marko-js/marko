// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/5", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#6/subscribe", $global_brand_key);
const $count__OR__$global_brand__script = _script("__tests__/template.marko_0_count#2_$global_brand#6", ($scope) => {
	$count__OR__$global_brand.r($scope);
	_el_read($scope["#button/0"]).dataset.log = (_el_read($scope["#button/0"]).dataset.log || "") + "[" + $scope.count + _global_read($scope.$global, "brand") + "]";
});
const $count__OR__$global_brand = /*@__PURE__*/ _global_or(3, ($scope) => {
	_text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand"));
	$count__OR__$global_brand__script($scope);
}, $global_brand);
const $count = _let("count/2", $count__OR__$global_brand);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_brand($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
