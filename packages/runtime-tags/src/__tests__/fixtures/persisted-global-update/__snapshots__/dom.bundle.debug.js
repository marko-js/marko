// template.marko
const $template = "<main><h1> </h1><button>read</button><p> </p></main>";
const $walks = "E l bD m";
const $read = /*@__PURE__*/ _let("read/3", ($scope) => _text($scope["#text/2"], $scope.read));
const $global_brand__script = _global_script("__tests__/template.marko_0_$global_brand#4", ($scope) => _on($scope["#button/1"], "click", function() {
	$read($scope, $scope.$global.brand);
}));
const $global_brand = _global_join("brand", "__tests__/template.marko_0_$global_brand#4/global", ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup($scope) {
	$read($scope, "");
	$global_brand($scope, $scope.$global.brand);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
