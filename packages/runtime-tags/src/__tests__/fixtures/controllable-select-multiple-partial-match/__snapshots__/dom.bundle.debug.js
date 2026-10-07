// template.marko
const $template = "<select multiple><option value=a>A</option><option value=b>B</option></select>";
const $walks = " b";
const $picked = /*@__PURE__*/ _let("picked/1", ($scope) => _attr_select_value($scope, "#select/0", $scope.picked, $valueChange($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/0"));
function $setup($scope) {
	$picked($scope, ["a", "z"]);
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_picked) => {
	$picked($scope, _new_picked);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
