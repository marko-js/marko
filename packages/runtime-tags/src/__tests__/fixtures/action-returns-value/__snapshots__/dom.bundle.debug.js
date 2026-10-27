// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $bump2 = _action("bump/7", "__tests__/template.marko_0_bump#7/action");
const $result = /*@__PURE__*/ _let("result/2", ($scope) => {
	_text($scope["#text/1"], $scope.result);
	$bump2($scope, $bump($scope));
});
const $double2 = _action("double/3", "__tests__/template.marko_0_double#3/action");
const $busy = _action("busy/5", "__tests__/template.marko_0_busy#5/action");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$result($scope, $scope.double(4));
	$scope.busy();
	$scope.bump(1);
}));
function $setup($scope) {
	$result($scope, 0);
	$double2($scope, $double);
	$busy($scope, void 0);
	$setup__script($scope);
}
const $bump = ($scope) => function(by) {
	$result($scope, $scope.result + by);
};
function $double(x) {
	return x * 2;
}
_resumed["__tests__/template.marko_0/bump"] = $bump;
_resumed["__tests__/template.marko_0/double"] = $double;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
