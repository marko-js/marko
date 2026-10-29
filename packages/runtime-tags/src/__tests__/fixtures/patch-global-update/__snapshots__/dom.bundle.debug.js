// template.marko
const $template = "<main><h1> </h1><button>read</button><p> </p></main>";
const $walks = "E l bD m";
const $read = _let("read/3", ($scope) => _text($scope["#text/2"], $scope.read));
const $setup__$global_brand = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_brand#5", ($scope) => _text($scope["#text/0"], $scope.$global.brand), "brand");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$read($scope, $scope.$global.brand);
}));
function $setup($scope) {
	$read($scope, "");
	$setup__script($scope);
	$setup__$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
