// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $a2 = /*@__PURE__*/ _let("a/2", ($scope) => {
	$a_self($scope, $scope.a?.self);
	$a2($scope, { self: $a($scope) });
});
const $a_self = /*@__PURE__*/ _const("a_self", ($scope) => _text($scope["#text/1"], typeof $scope.a_self));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a2($scope, { self: () => $scope.a.self() });
}));
const $setup = $setup__script;
const $a = ($scope) => () => $scope.a;
_resumed["__tests__/template.marko_0/a"] = $a;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
