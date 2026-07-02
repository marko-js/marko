// template.marko
const $template = "<!><!><button>inc</button><div class=total> </div><div class=seen> </div>";
const $walks = "b%b bD lD l";
const $for_content__i__script = _script("__tests__/template.marko_1_i", ($scope) => _on($scope["#button/0"], "click", function() {
	$seen($scope._, `${$scope._.seen}(${$scope.i}:${$scope._.total})`);
}));
const $for_content__i = /* @__PURE__ */ _const("i", ($scope) => {
	_text($scope["#text/1"], $scope.i);
	$for_content__i__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $total = /* @__PURE__ */ _let("total/4", ($scope) => _text($scope["#text/2"], $scope.total));
const $seen = /* @__PURE__ */ _let("seen/5", ($scope) => _text($scope["#text/3"], $scope.seen));
const $for = /* @__PURE__ */ _for_of("#text/0", "<button>pick <!></button>", " Db%l", 0, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$total($scope, $scope.total + 1);
}));
function $setup($scope) {
	$total($scope, 0);
	$seen($scope, "");
	$for($scope, [[
		1,
		2,
		3
	]]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
