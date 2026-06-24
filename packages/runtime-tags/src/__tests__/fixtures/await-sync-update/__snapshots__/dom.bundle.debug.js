// template.marko
const $template = "<!><!><button>inc</button>";
const $walks = "b%b b";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "Got: <!>", "b%b");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$await_promise($scope, `v${$scope.n}`);
	$n__script($scope);
});
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
