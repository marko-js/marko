// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "Got: <!>", "b%b");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $showAsync__script = _script("__tests__/template.marko_0_showAsync", ($scope) => _on($scope["#button/1"], "click", function() {
	$showAsync($scope, !$scope.showAsync);
}));
const $showAsync = /*@__PURE__*/ _let("showAsync/2", ($scope) => {
	$await_promise($scope, $scope.showAsync ? resolveAfter("ASYNC") : "SYNC");
	$showAsync__script($scope);
});
function $setup($scope) {
	$await_content($scope);
	$showAsync($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
