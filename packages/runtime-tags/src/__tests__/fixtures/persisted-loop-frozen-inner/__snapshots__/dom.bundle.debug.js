// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content2__o = /*@__PURE__*/ _resume("__tests__/template.marko_2_o#2/init", /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.o)));
const $for_content2__setup = $for_content2__o;
const $for_content2__i = ($scope, i) => _text($scope["#text/1"], i);
const $for_content2__$params = ($scope, $params3) => $for_content2__i($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<div><!><!></div>", "D%b%", $for_content2__setup, $for_content2__$params);
const $for_content__inner = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__for($scope, [$scope._.inner]));
const $for_content__setup = $for_content__inner;
const $for_content__$params = ($scope, $params2) => $for_content__o($scope, $params2[0]);
const $for_content__o = /*@__PURE__*/ _const("o", $for_content2__o);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $outer = /*@__PURE__*/ _let("outer/2", ($scope) => $for($scope, [$scope.outer]));
const $inner = /*@__PURE__*/ _let("inner/3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$outer($scope, [...$scope.outer, "b"]);
}));
function $setup($scope) {
	$outer($scope, ["a"]);
	$inner($scope, ["x"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
