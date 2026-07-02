// template.marko
const $template = "<button>inc</button><div></div><div></div>";
const $walks = " b b b";
const $d__OR__more__OR__obj__OR__k = /* @__PURE__ */ _or(9, ($scope) => _attr_class($scope["#div/1"], [
	"a",
	["b", $scope.d],
	...$scope.more,
	...["n1", $scope.d],
	{
		[$scope.k]: $scope.d,
		...$scope.obj,
		"q": $scope.d
	}
]), 3);
const $d__OR__moreStyles = /* @__PURE__ */ _or(6, ($scope) => _attr_style($scope["#div/2"], [
	"color:red",
	["margin:0", $scope.d && "padding:0"],
	...$scope.moreStyles
]));
const $d = /* @__PURE__ */ _let("d/3", ($scope) => {
	$d__OR__more__OR__obj__OR__k($scope);
	$d__OR__moreStyles($scope);
});
const $more = /* @__PURE__ */ _const("more", $d__OR__more__OR__obj__OR__k);
const $moreStyles = /* @__PURE__ */ _const("moreStyles", $d__OR__moreStyles);
const $obj = /* @__PURE__ */ _const("obj", $d__OR__more__OR__obj__OR__k);
const $k = /* @__PURE__ */ _const("k", $d__OR__more__OR__obj__OR__k);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$d($scope, $scope.d + "2");
}));
function $setup($scope) {
	$d($scope, "dyn");
	$more($scope, ["m1"]);
	$moreStyles($scope, ["display:block"]);
	$obj($scope, { o: true });
	$k($scope, "computed");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
