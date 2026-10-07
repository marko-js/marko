// template.marko
const $template = "<input><div class=custom></div><p> </p>";
const $walks = " cD l";
const $v = /*@__PURE__*/ _let("v/2", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.v, $valueChange($scope));
	_text($scope["#text/1"], $scope.v);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$v($scope, "init");
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
