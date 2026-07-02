// template.marko
const $template = "<button>toggle</button><input><output> </output>";
const $walks = " b bD l";
const $v__OR__rest__script = _script("__tests__/template.marko_0_v_rest", ($scope) => _attrs_script($scope, "#input/1"));
const $v__OR__rest = /* @__PURE__ */ _or(5, ($scope) => {
	_attrs($scope, "#input/1", {
		type: "checkbox",
		checkedValue: $scope.v,
		value: "",
		...$scope.rest
	});
	$v__OR__rest__script($scope);
});
const $v = /* @__PURE__ */ _let("v/3", ($scope) => {
	_text($scope["#text/2"], $scope.v === undefined ? "undefined" : "value=" + $scope.v);
	$v__OR__rest($scope);
});
const $rest = /* @__PURE__ */ _const("rest", $v__OR__rest);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$v($scope, $scope.v === "" ? "x" : "");
}));
function $setup($scope) {
	$v($scope, "");
	$rest($scope, { placeholder: "p" });
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
