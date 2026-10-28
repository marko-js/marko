// template.marko
const $template = "<button> </button><pre></pre>";
const $walks = " D l b";
const $count__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_count#3_$global_brand#6", ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand")), "brand");
const $count = _let("count/3", $count__$global_brand);
const $setup__$global__script = _fill_global_script("__tests__/template.marko_0_$global#5", ($scope) => _el_read($scope["#pre/2"]).textContent = JSON.stringify($scope.$global), "");
const $setup__$global = $setup__$global__script;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__$global($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
