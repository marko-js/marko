// template.marko
const $template = "<button class=bump>bump</button><button class=show>show</button><div class=n> </div><div class=log> </div>";
const $walks = " b bD lD l";
const $state_n__OR__state_tag__script = _script("__tests__/template.marko_0_state_n_state_tag", ($scope) => _on($scope["#button/0"], "click", function() {
	$state($scope, {
		n: $scope.state_n + 1,
		tag: $scope.state_tag
	});
}));
const $state_n__OR__state_tag = $state_n__OR__state_tag__script;
const $state = /* @__PURE__ */ _let("state/4", ($scope) => {
	$state_n($scope, $scope.state.n);
	$state_tag($scope, $scope.state.tag);
	$state_n__OR__state_tag($scope);
});
const $state_tag__OR__n__script = _script("__tests__/template.marko_0_state_tag_n", ($scope) => _on($scope["#button/1"], "click", function() {
	$log($scope, `${$scope.log}[${$scope.state_n}:${$scope.state_tag}]`);
}));
const $state_tag__OR__n = /* @__PURE__ */ _or(8, $state_tag__OR__n__script);
const $state_n = /* @__PURE__ */ _const("state_n", ($scope) => {
	$n($scope, $scope.state_n);
	$state_tag__OR__n($scope);
});
const $n = ($scope) => {
	_text($scope["#text/2"], $scope.state_n);
};
const $state_tag = /* @__PURE__ */ _const("state_tag", $state_tag__OR__n);
const $log = /* @__PURE__ */ _let("log/7", ($scope) => _text($scope["#text/3"], $scope.log));
function $setup($scope) {
	$state($scope, {
		n: 0,
		tag: "x"
	});
	$log($scope, "");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
