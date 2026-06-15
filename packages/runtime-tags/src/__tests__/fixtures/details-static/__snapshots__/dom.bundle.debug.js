// template.marko
const $template = "<button>inc <!></button><details><summary>summary</summary> body</details><dialog>dialog body</dialog>";
const $walks = " Db%lc";
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	$n($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
