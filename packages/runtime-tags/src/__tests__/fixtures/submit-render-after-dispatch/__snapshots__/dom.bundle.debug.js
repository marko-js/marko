// template.marko
const $template = "<form><button name=_action value=add>Add</button></form>";
const $walks = " D l";
const $busy = /*@__PURE__*/ _let("busy/2", ($scope) => _attr($scope["#button/1"], "disabled", $scope.busy));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#form/0"], "submit", function(ev) {
	ev.preventDefault();
	$busy($scope, true);
}));
function $setup($scope) {
	$busy($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
