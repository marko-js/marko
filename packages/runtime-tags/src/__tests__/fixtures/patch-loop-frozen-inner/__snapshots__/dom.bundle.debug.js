// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content2__o = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.o), 5);
const $for_content2__setup = $for_content2__o;
const $for_content2__$params = ($scope, $params3) => _text($scope["#text/1"], $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div><!><!></div>", "D%b%", $for_content2__setup, $for_content2__$params);
const $for_content__inner = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__for($scope, [$scope._.inner]), 4);
const $for_content__setup = $for_content__inner;
const $for_content__$params = ($scope, $params2) => $for_content__o($scope, $params2[0]);
const $for_content__o = /*@__PURE__*/ _const("o", $for_content2__o);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $outer = _let("outer/2", ($scope) => $for($scope, [$scope.outer]));
const $inner = _let("inner/3", $for_content__inner);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$outer($scope, [...$scope.outer, "b"]);
}));
function $setup($scope) {
	$outer($scope, ["a"]);
	$inner($scope, ["x"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
