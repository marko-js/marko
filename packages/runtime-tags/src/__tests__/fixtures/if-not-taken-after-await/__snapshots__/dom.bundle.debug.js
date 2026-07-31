// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content__v = ($scope, v) => _text($scope, "#text/0", v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__if = /*@__PURE__*/ _if("#text/1", "never");
const $if_content__x = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__if($scope, $scope._.x > 9 ? 0 : 1));
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<i> </i>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__x._($scope);
	$await_content($scope);
	$if_content__await_promise($scope, resolveAfter("A", 1));
};
const $if = /*@__PURE__*/ _if("#text/2", "<b>before</b><!><!><!>", "b%b%", $if_content__setup);
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	_text($scope, "#text/1", $scope.x);
	$if($scope, $scope.x % 2 === 0 ? 0 : 1);
	$if_content__x($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
