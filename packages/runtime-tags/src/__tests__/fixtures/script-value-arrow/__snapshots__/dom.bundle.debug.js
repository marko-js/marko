// template.marko
const $template = "<button>inc <!></button>";
const $walks = " Db%l";
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => console.log($scope.n));
const $n = /* @__PURE__ */ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
