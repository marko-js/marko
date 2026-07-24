// template.marko
const $template = "<button id=inc>inc</button><ul></ul><!><!>";
const $walks = " b b%c";
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $for_content__n = /*@__PURE__*/ _for_closure("#ul/1", ($scope) => _text($scope["#text/1"], $scope._.n));
const $for_content__setup = $for_content__n;
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li>item <!> of <!></li>", "Db%c%l", $for_content__setup, $for_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<div id=awaited>awaited <!></div>", "Db%l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	$for($scope, [Array.from({ length: $scope.n }, (_, i) => i)]);
	$await_promise($scope, resolveAfter($scope.n));
	$for_content__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
