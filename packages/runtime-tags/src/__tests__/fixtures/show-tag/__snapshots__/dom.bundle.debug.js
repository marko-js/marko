// template.marko
const $template = "<button>toggle</button><!><div>Hello!</div><!><!>";
const $walks = " b%c%c";
const $show2 = /* @__PURE__ */ _show("#text/2", "#text/1");
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/3", ($scope) => {
	$show2($scope, $scope.show);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
