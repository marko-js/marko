// template.marko
const $template = "<input><button> </button>";
const $walks = " b D l";
const $disabled__script = _script("__tests__/template.marko_0_disabled", ($scope) => _on($scope["#button/1"], "click", function() {
	$disabled($scope, !$scope.disabled);
}));
const $disabled = /* @__PURE__ */ _let("disabled/3", ($scope) => {
	_attr($scope["#input/0"], "disabled", $scope.disabled);
	_text($scope["#text/2"], $scope.disabled ? "enable" : "disable");
	$disabled__script($scope);
});
function $setup($scope) {
	$disabled($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
