// template.marko
const $template = "<button> </button><p id=out> </p>";
const $walks = " D lD l";
const $out = /*@__PURE__*/ _let("out/3", ($scope) => _text($scope["#text/2"], $scope.out));
const $x = /*@__PURE__*/ _let_change("x/5", ($scope) => _text($scope["#text/1"], $scope.x));
const $onChange2 = ($scope, onChange) => $x($scope, 1, onChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, 5);
}));
function $setup($scope) {
	$out($scope, "-");
	$onChange2($scope, $onChange($scope));
	$setup__script($scope);
}
const $onChange = ($scope) => (next) => {
	$out($scope, String(next));
};
_resumed["__tests__/template.marko_0/onChange"] = $onChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
