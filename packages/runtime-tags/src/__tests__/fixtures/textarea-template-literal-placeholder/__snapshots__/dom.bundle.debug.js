// template.marko
const $template = "<button>inc <!></button><textarea></textarea>";
const $walks = " Db%l b";
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_attr_input_value_default($scope, "#textarea/2", `premid-${$scope.n}-postend`);
	$n__script($scope);
});
function $setup($scope) {
	$n($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
