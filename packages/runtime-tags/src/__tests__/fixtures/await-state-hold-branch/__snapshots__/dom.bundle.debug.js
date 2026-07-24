// template.marko
const $template = "<button id=inc>inc</button><!><!><!>";
const $walks = " b%b%c";
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $else_content__n = /*@__PURE__*/ _if_closure("#text/1", 1, ($scope) => _text($scope["#text/0"], $scope._.n));
const $else_content__setup = $else_content__n;
const $if_content__n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.n));
const $if_content__setup = $if_content__n;
const $if = /*@__PURE__*/ _if("#text/1", "<div id=odd>odd <!></div>", "Db%l", $if_content__setup, "<div id=even>even <!></div>", "Db%l", $else_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<div id=awaited>awaited <!></div>", "Db%l");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	$if($scope, $scope.n % 2 ? 0 : 1);
	$await_promise($scope, resolveAfter($scope.n));
	$if_content__n($scope);
	$else_content__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
