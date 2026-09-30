// template.marko
const $template = "<input><p id=out> </p>";
const $walks = " bD l";
const $out = /*@__PURE__*/ _let("out/2", ($scope) => _text($scope["#text/1"], $scope.out));
const $onChange2 = /*@__PURE__*/ _const("onChange", ($scope) => _attr_input_value($scope, "#input/0", "a", $scope.onChange));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$out($scope, "-");
	$onChange2($scope, $onChange($scope));
	$setup__script($scope);
}
const $onChange = ($scope) => (next) => {
	$out($scope, next);
};
_resumed["__tests__/template.marko_0/onChange"] = $onChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
