// template.marko
const $template = "<div><span>S</span><!></div><button>drop</button>";
const $walks = "Db%l b";
const $for_content__x = /*@__PURE__*/ _const("x", ($scope) => _text($scope["#comment/0"], $scope.x));
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!---->", " ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/2", ($scope) => $for($scope, [$scope.list]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, $scope.list.slice(1));
}));
function $setup($scope) {
	$list($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
