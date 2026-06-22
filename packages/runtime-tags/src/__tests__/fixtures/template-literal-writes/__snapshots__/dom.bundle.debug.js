// template.marko
const $template = "<button>b</button><textarea></textarea><div>t-<!>-z</div>";
const $walks = " b b Db%l";
const $d__script = _script("__tests__/template.marko_0_d", ($scope) => _on($scope["#button/0"], "click", function() {
	$d($scope, $scope.d + "!");
}));
const $d = /* @__PURE__ */ _let("d/4", ($scope) => {
	_attr_input_value_default($scope, "#textarea/1", `a-${$scope.d}-b`);
	_attr($scope["#div/2"], "id", `id-${$scope.d}`);
	_attr($scope["#div/2"], "data-x", `${$scope.d}`);
	_text($scope["#text/3"], `${$scope.d}`);
	$d__script($scope);
});
function $setup($scope) {
	$d($scope, "y");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
