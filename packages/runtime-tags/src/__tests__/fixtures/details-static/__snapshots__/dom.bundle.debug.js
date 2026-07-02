// template.marko
const $template = "<button>inc <!></button><details><summary>summary</summary> body</details><dialog>dialog body</dialog>";
const $walks = " Db%lc";
const $n = /* @__PURE__ */ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
