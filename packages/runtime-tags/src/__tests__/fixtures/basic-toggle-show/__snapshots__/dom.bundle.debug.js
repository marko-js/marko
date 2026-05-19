// template.marko
const $template = "<div><!><button>Toggle</button></div>";
const $walks = "D%b l";
const $if = /* @__PURE__ */ _if("#text/0", "Hello!", "b");
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
