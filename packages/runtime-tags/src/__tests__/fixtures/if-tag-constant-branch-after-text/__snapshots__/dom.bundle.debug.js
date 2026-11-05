// template.marko
const $template = "<p>x <!></p><button>add</button>";
const $walks = "Db%l b";
const $else_content2__v = /*@__PURE__*/ _closure_get("v/3", ($scope) => _text($scope["#text/0"], $scope._._.v), ($scope) => $scope._._, "__tests__/template.marko_2_v#0:2/subscribe");
const $else_content2__setup = $else_content2__v;
const $else_content__if = /*@__PURE__*/ _if("#text/0", "<b></b>", 0, 0, " ", " ", $else_content2__setup);
const $else_content__setup = ($scope) => $else_content__if($scope, false ? 0 : 1);
const $v__closure = /*@__PURE__*/ _closure($else_content2__v);
const $v = /*@__PURE__*/ _let("v/2", $v__closure);
const $if = /*@__PURE__*/ _if("#text/0", "<b></b>", 0, 0, "<!><!><!>", "b%", $else_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$v($scope, $scope.v + "!");
}));
function $setup($scope) {
	$v($scope, "a");
	$if($scope, false ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
