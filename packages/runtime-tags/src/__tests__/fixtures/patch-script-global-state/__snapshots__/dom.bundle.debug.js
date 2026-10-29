// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count__$global_brand__script = _fill_global_script("__tests__/template.marko_0_count#2_$global_brand#6", ($scope) => _el_read($scope["#button/0"]).dataset.log = (_el_read($scope["#button/0"]).dataset.log || "") + "[" + $scope.count + _global_read($scope.$global, "brand") + "]", "brand");
const $count__$global_brand = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_count#2_$global_brand#6", ($scope) => {
	_text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand"));
	$count__$global_brand__script($scope);
}, "brand");
const $count = _let("count/2", $count__$global_brand);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
