// template.marko
const $template = "<button>flip</button><div>x <!> y</div><!><!>";
const $walks = " bDb%l%c";
const $if = /*@__PURE__*/ _if("#text/1", "<span>A</span>", 0, 0, "<span>B</span>");
const $flip = /*@__PURE__*/ _let("flip/3", ($scope) => $if($scope, $scope.flip ? 0 : 1));
const $await_content = /*@__PURE__*/ _await_content("#text/2", "ready");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$flip($scope, !$scope.flip);
}));
function $setup($scope) {
	$await_content($scope);
	$flip($scope, false);
	$await_promise($scope, resolveAfter(0, 1));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
