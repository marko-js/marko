// template.marko
const $template = "<button>pick</button><input><span> </span>";
const $walks = " b bD l";
const $v__OR__rest__script = _script("__tests__/template.marko_0_v_rest", ($scope) => _attrs_script($scope, "#input/1"));
const $v__OR__rest = /* @__PURE__ */ _or(5, ($scope) => {
	_attrs($scope, "#input/1", {
		type: "radio",
		checkedValue: $scope.v,
		...$scope.rest
	});
	$v__OR__rest__script($scope);
});
const $v__script = _script("__tests__/template.marko_0_v", ($scope) => _on($scope["#button/0"], "click", function() {
	$v($scope, $scope.v === "a" ? "z" : "a");
}));
const $v = /* @__PURE__ */ _let("v/3", ($scope) => {
	_text($scope["#text/2"], $scope.v);
	$v__OR__rest($scope);
	$v__script($scope);
});
const $rest = /* @__PURE__ */ _const("rest", $v__OR__rest);
function $setup($scope) {
	$v($scope, "a");
	$rest($scope, {
		value: "z",
		placeholder: "p"
	});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
