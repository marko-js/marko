// template.marko
const $template = "<div><!> <!></div><button>update</button>";
const $walks = "D%c%l b";
const $obj = /*@__PURE__*/ _let("obj/3", ($scope) => {
	$obj_c($scope, $scope.obj.c);
	$a2($scope, $scope.obj.a);
});
const $obj_c = /*@__PURE__*/ _const("obj_c", ($scope) => _text($scope["#text/1"], $scope.obj_c));
const $a2 = /*@__PURE__*/ _const("$a", ($scope) => $b($scope, $scope.$a.b));
const $b = /*@__PURE__*/ _const("b", ($scope) => _text($scope["#text/0"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$obj($scope, {
		a: { b: 3 },
		c: 4
	});
}));
function $setup($scope) {
	$obj($scope, {
		a: { b: 1 },
		c: 2
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
