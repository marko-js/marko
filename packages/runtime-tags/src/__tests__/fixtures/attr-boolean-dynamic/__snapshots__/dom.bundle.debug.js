// template.marko
const $template = "<input><button> </button>";
const $walks = " b D l";
const $disabled = /* @__PURE__ */ _let("disabled/3", ($scope) => {
	_attr($scope["#input/0"], "disabled", $scope.disabled);
	_text($scope["#text/2"], $scope.disabled ? "enable" : "disable");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$disabled($scope, !$scope.disabled);
}));
function $setup($scope) {
	$disabled($scope, true);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
