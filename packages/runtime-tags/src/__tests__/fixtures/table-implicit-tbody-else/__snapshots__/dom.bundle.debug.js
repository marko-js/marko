// template.marko
const $template = "<table></table><button>toggle</button>";
const $walks = " b b";
const $if = /*@__PURE__*/ _if("#table/0", "<caption>loading</caption>", 0, 0, "<tr><td>loaded</td></tr>");
const $loading = /*@__PURE__*/ _let("loading/2", ($scope) => $if($scope, $scope.loading ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$loading($scope, !$scope.loading);
}));
function $setup($scope) {
	$loading($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
