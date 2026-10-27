// template.marko
const $template = "<form><button name=_action value=add>Add</button></form><button> </button>";
const $walks = " D l D l";
const $act2__script = _script("__tests__/template.marko_0_act#5", ($scope) => _on($scope["#form/0"], "submit", $scope.act));
const $act2 = _action("act/5", "__tests__/template.marko_0_act#5/action", ($scope) => {
	$act_pending($scope, $scope.act?.pending);
	$act2__script($scope);
});
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$act2($scope, $act($scope));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $act_pending = /*@__PURE__*/ _const("act_pending", ($scope) => _attr($scope["#button/1"], "disabled", $scope.act_pending));
const $act = ($scope) => async (ev) => {
	ev.preventDefault();
	$count($scope, +$scope.count + 1);
	await new Promise((resolve) => setTimeout(resolve, 100));
};
_resumed["__tests__/template.marko_0/act"] = $act;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
