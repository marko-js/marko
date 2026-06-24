// template.marko
const $template = "<button id=a>a</button><button id=b>b <!></button>";
const $walks = " b Db%l";
const $obj = ($scope, obj) => $obj_go($scope, obj.go);
const $obj_go__script = _script("__tests__/template.marko_0_obj_go", ($scope) => _on($scope["#button/0"], "click", $scope.obj_go));
const $obj_go = /*@__PURE__*/ _const("obj_go", $obj_go__script);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/5", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	$obj($scope, new class {
		#hidden() {}
		go = this.#hidden;
	}());
	$n($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
