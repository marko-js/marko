// template.marko
const $template = "<div><!> <!></div><button></button>";
const $walks = "D%c%l b";
const $obj = /*@__PURE__*/ _let("obj/3", ($scope) => $a($scope, $scope.obj.a));
const $a = /*@__PURE__*/ _const("a", ($scope) => $a_b($scope, $scope.a?.b));
const $a_b = /*@__PURE__*/ _const("a_b", ($scope) => {
	_text($scope["#text/0"], JSON.stringify($scope.a_b));
	$a_b_c($scope, $scope.a_b?.c);
});
const $a_b_c = /*@__PURE__*/ _const("a_b_c", ($scope) => _text($scope["#text/1"], String($scope.a_b_c)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$obj($scope, { a: { b: { c: 2 } } });
}));
function $setup($scope) {
	$obj($scope, { a: undefined });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
