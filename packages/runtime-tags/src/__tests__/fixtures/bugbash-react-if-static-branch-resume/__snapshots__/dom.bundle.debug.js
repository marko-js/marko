// template.marko
const $template = "<div id=a></div><div id=b></div><button id=toggle>toggle</button>";
const $walks = " b b b";
const $if = /*@__PURE__*/ _if("#div/0", "<span>static content</span>", "b");
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $if2 = /*@__PURE__*/ _if("#div/1", "<span>other static</span>", "b");
const $hide = /*@__PURE__*/ _let("hide/4", ($scope) => $if2($scope, $scope.hide ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
	$hide($scope, !$scope.hide);
}));
function $setup($scope) {
	$show($scope, true);
	$hide($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
