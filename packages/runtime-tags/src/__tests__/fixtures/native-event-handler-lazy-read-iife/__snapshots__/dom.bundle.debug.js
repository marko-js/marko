// template.marko
const $template = "<button class=bump>bump</button><button class=snap>snap</button><div class=n> </div><div class=log> </div>";
const $walks = " b bD lD l";
const $n__OR__log__script = _script("__tests__/template.marko_0_n_log", ($scope) => _on($scope["#button/1"], "click", (() => {
	const captured = $scope.n;
	return () => {
		$log($scope, `${$scope.log}[${captured}:${$scope.n}]`);
	};
})()));
const $n__OR__log = /* @__PURE__ */ _or(6, $n__OR__log__script);
const $n = /* @__PURE__ */ _let("n/4", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$n__OR__log($scope);
});
const $log = /* @__PURE__ */ _let("log/5", ($scope) => {
	_text($scope["#text/3"], $scope.log);
	$n__OR__log($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
