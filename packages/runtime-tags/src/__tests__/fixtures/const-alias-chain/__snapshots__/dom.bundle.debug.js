// template.marko
const $template = "<div><!> <!> <!></div><button></button>";
const $walks = "D%c%c%l b";
const $obj = /*@__PURE__*/ _let("obj/4", ($scope) => {
	$obj_c($scope, $scope.obj.c);
	$a($scope, $scope.obj.a);
});
const $obj_c = /*@__PURE__*/ _const("obj_c", ($scope) => _text($scope["#text/2"], $scope.obj_c));
const $a = /*@__PURE__*/ _const("a", ($scope) => $a_b($scope, $scope.a.b));
const $a_b = /*@__PURE__*/ _const("a_b", ($scope) => {
	_text($scope["#text/1"], $scope.a_b);
	$z($scope, $scope.a_b);
});
const $z = ($scope) => {
	_text($scope["#text/0"], $scope.a_b);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
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
