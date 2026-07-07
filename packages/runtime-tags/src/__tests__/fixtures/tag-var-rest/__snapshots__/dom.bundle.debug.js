// template.marko
const $template = "<div class=obj> </div><div class=partialObj> </div><div class=a> </div><div class=b> </div><div class=a> </div><button>Update</button>";
const $walks = "D lD lD lD lD l b";
const $obj = /*@__PURE__*/ _let("obj/6", ($scope) => {
	_text($scope["#text/0"], JSON.stringify($scope.obj));
	(({ a, ...partialObj }) => $partialObj($scope, partialObj))($scope.obj);
	$a($scope, $scope.obj.a);
	$obj_b($scope, $scope.obj.b);
});
const $partialObj = /*@__PURE__*/ _const("partialObj", ($scope) => {
	_text($scope["#text/1"], JSON.stringify($scope.partialObj));
	$partialObj_a($scope, $scope.partialObj.a);
});
const $partialObj_a = /*@__PURE__*/ _const("partialObj_a", ($scope) => _text($scope["#text/4"], $scope.partialObj_a === undefined ? "removed a" : "didn't remove a"));
const $a = /*@__PURE__*/ _const("a", ($scope) => _text($scope["#text/2"], $scope.a));
const $obj_b = /*@__PURE__*/ _const("obj_b", ($scope) => _text($scope["#text/3"], $scope.obj_b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$obj($scope, {
		a: 4,
		b: 5,
		d: 6
	});
}));
function $setup($scope) {
	$obj($scope, {
		a: 1,
		b: 2,
		c: 3
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
