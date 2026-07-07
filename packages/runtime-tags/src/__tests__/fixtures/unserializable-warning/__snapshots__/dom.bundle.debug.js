// template.marko
const $template = "<!><!>";
const $walks = "b/&b";
const $Foo_content__test__script = _script("__tests__/template.marko_1_test", ($scope) => $scope.test());
const $Foo_content__test = /*@__PURE__*/ _const("test", $Foo_content__test__script);
const $Foo_content__unserializable = /*@__PURE__*/ _const("unserializable", ($scope) => $Foo_content__test($scope, $test($scope)));
const $Foo_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Foo_content__unserializable($scope, { nested: { thing: Buffer.from("") } }));
function $setup($scope) {
	$Foo_content__setup._($scope["#childScope/0"], $scope);
}
function $test($scope) {
	return function() {
		return $scope.unserializable;
	};
}
_resume("__tests__/template.marko_1/test", $test);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
