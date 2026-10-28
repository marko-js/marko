// template.marko
const $template = "<button>read</button><output> </output>";
const $walks = " bD l";
const $out = _let("out/2", ($scope) => _text($scope["#text/1"], $scope.out));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope, $scope.$global.brand);
}));
function $setup($scope) {
	$out($scope, "-");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
