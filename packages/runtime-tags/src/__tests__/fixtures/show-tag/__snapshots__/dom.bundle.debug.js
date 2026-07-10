// template.marko
const $template = "<button>toggle</button><!><div>Hello!</div><!><!>";
const $walks = " b%c%c";
const $show2 = /*@__PURE__*/ _show("#text/2", "#text/1");
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $show2($scope, "show" in $scope ? $scope.show : true));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !("show" in $scope ? $scope.show : true));
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
