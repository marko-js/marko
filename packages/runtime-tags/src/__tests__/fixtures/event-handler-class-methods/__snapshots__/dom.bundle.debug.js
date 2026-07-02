// template.marko
const $template = "<button id=a>a <!></button><button id=b>b</button><button id=c>c</button>";
const $walks = " Db%l b b";
var Helper = class Helper {
	static go() {
		Helper.count = (Helper.count || 0) + 1;
	}
};
const $obj2 = ($scope, obj) => $obj_go($scope, obj.go);
const $obj_go__script = _script("__tests__/template.marko_0_obj_go", ($scope) => _on($scope["#button/2"], "click", $scope.obj_go));
const $obj_go = /* @__PURE__ */ _const("obj_go", $obj_go__script);
const $n = /* @__PURE__ */ _let("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", Helper.go);
	_on($scope["#button/3"], "click", function() {
		$n($scope, $scope.n + 1);
	});
});
function $setup($scope) {
	$obj2($scope, { go: $obj });
	$n($scope, 1);
	$setup__script($scope);
}
function $obj() {}
_resume("__tests__/template.marko_0/obj", $obj);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
