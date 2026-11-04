// template.marko
const $template = "<button class=change>change</button><!><!>";
const $walks = " b%c";
const $for_content__b = ($scope) => _text($scope["#text/0"], $scope.a);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.a);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__a($scope, $params2[0].a);
const $for_content__a = /*@__PURE__*/ _const("a", ($scope) => $for_content__b($scope, $scope.a));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<div> </div><button class=log>log</button>", "D l ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/2", ($scope) => $for($scope, [$scope.rows]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, [{ a: "bye" }, { a: "now" }]);
}));
function $setup($scope) {
	$rows($scope, [{ a: "hello" }, { a: "world" }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
