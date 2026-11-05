// template.marko
const $template = "<input></input><span> </span>";
const $walks = " bD l";
const $value__script = _script("__tests__/template.marko_0_value#2", ($scope) => _attrs_script($scope, "#input/0"));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	_attrs_content($scope, "#input/0", {
		value: $scope.value,
		valueChange: $valueChange($scope)
	}, _controllable_input);
	_text($scope["#text/1"], $scope.value);
	$value__script($scope);
});
function $setup($scope) {
	$value($scope, "hello");
}
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
