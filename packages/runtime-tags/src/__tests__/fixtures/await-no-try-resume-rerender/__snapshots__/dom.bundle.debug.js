// template.marko
const $template = "<button id=a>A</button><!><!>";
const $walks = " b%c";
const $await_content__n = /* @__PURE__ */ _closure_get("n", ($scope) => _text($scope["#text/0"], $scope._.n));
const $await_content__setup = $await_content__n;
const $await_content = /* @__PURE__ */ _await_content("#text/1", "<div id=out>done <!></div>", "Db%l", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/1");
const $n__closure = /* @__PURE__ */ _closure($await_content__n);
const $n = /* @__PURE__ */ _let("n/2", ($scope) => {
	$await_promise($scope, resolveAfter($scope.n, 0));
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
