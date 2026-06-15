// template.marko
const $template = "<button>inc <!></button><input>";
const $walks = " Db%l b";
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__script($scope);
});
const $state = ($scope, state) => {
	$state_x($scope, state.x);
	$state_xChange($scope, state.xChange);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/2"));
function $setup($scope) {
	$n($scope, 1);
	$state($scope, { x: "v" });
	$setup__script($scope);
}
const $state_x__OR__state_xChange = /* @__PURE__ */ _or(7, ($scope) => _attr_input_value($scope, "#input/2", $scope.state_x, $scope.state_xChange));
const $state_x = /* @__PURE__ */ _const("state_x", $state_x__OR__state_xChange);
const $state_xChange = /* @__PURE__ */ _const("state_xChange", $state_x__OR__state_xChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
