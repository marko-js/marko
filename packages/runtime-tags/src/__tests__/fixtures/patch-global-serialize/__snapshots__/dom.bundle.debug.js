// template.marko
const $template = "<button> </button><pre></pre>";
const $walks = " D l b";
const $count__OR__$global_brand = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_count#3_$global_brand#6/setup", 4, ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand")));
const $count = _let("count/3", $count__OR__$global_brand);
const $global_brand = _fill_global_resume("__tests__/template.marko_0_$global_brand#6/subscribe", $count__OR__$global_brand, "brand");
const $global2__script = _script("__tests__/template.marko_0_$global#5", ($scope) => _el_read($scope["#pre/2"]).textContent = JSON.stringify($scope.$global));
const $global2 = _fill_global_resume("__tests__/template.marko_0_$global#5/subscribe", $global2__script, "");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$global_brand($scope);
	$global2($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
