// template.marko
const $template = "<div><span>S</span><!></div><div>hello<!></div><button>drop</button>";
const $walks = "Db%lDb%l b";
const $for_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content2__$params = ($scope, $params3) => $for_content2__x($scope, $params3[0]);
const $for_content__empty = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.empty));
const $for_content__setup = $for_content__empty;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", " ", " ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", " ", " ", 0, $for_content2__$params);
const $list = /*@__PURE__*/ _let("list/3", ($scope) => {
	$for($scope, [$scope.list]);
	$for2($scope, [$scope.list]);
});
const $empty = /*@__PURE__*/ _const("empty");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$list($scope, $scope.list.slice(1));
}));
function $setup($scope) {
	$list($scope, ["a", "b"]);
	$empty($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
