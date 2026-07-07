// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__baz = /*@__PURE__*/ _let("baz/1", ($scope) => _text($scope["#text/0"], $scope.baz));
const $if_content__foo = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__baz($scope, $scope._.foo));
const $if_content__setup = $if_content__foo;
const $for_content__if = /*@__PURE__*/ _if("#text/0", " ", " b", $if_content__setup);
const $for_content__setup = ($scope) => $for_content__if($scope, true ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__foo($scope, $params2[0]);
const $for_content__foo = /*@__PURE__*/ _const("foo");
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [["foo"]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
