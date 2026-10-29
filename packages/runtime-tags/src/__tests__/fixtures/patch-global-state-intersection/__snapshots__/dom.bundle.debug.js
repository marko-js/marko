// template.marko
const $template = "<div><h1> </h1><button>+</button></div>";
const $walks = "E l l";
const $count__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_count#2_$global_brand#5", ($scope) => _text($scope["#text/0"], _global_read($scope.$global, "brand") + " #" + $scope.count), "brand");
const $count = _let("count/2", $count__$global_brand);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
