// template.marko
const $template = "<button>toggle</button><div> </div>";
const $walks = " bD l";
const $obj = ($scope, obj) => $obj_label($scope, obj?.label);
const $obj_label__OR__n = ($scope) => {
	_text($scope["#text/1"], ($scope.obj_label ?? "none") + ($scope.show ? 1 : 2));
};
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/2", ($scope) => {
	$obj($scope, $scope.show && { label: "hi" });
	$obj_label__OR__n($scope);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, false);
}
const $obj_label = /* @__PURE__ */ _const("obj_label");
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
