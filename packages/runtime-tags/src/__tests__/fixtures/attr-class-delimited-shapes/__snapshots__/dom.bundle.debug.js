// template.marko
const $template = "<button>inc</button><div></div><div></div>";
const $walks = " b b b";
const $d__OR__more__OR__obj = /* @__PURE__ */ _or(8, ($scope) => _attr_class($scope["#div/1"], [
	"a",
	["b", $scope.d],
	...$scope.more,
	...["n1", $scope.d],
	{
		["computed"]: $scope.d,
		...$scope.obj,
		"q": $scope.d
	}
]), 2);
const $d__OR__moreStyles = /* @__PURE__ */ _or(6, ($scope) => _attr_style($scope["#div/2"], [
	"color:red",
	["margin:0", $scope.d && "padding:0"],
	...$scope.moreStyles
]));
const $d__script = _script("__tests__/template.marko_0_d", ($scope) => _on($scope["#button/0"], "click", function() {
	$d($scope, $scope.d + "2");
}));
const $d = /* @__PURE__ */ _let("d/3", ($scope) => {
	$d__OR__more__OR__obj($scope);
	$d__OR__moreStyles($scope);
	$d__script($scope);
});
const $more = /* @__PURE__ */ _const("more", $d__OR__more__OR__obj);
const $moreStyles = /* @__PURE__ */ _const("moreStyles", $d__OR__moreStyles);
const $obj = /* @__PURE__ */ _const("obj", $d__OR__more__OR__obj);
function $setup($scope) {
	$d($scope, "dyn");
	$more($scope, ["m1"]);
	$moreStyles($scope, ["display:block"]);
	$obj($scope, { o: true });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
