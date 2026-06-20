// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $updateoutlet_content__n__script = _script("__tests__/template.marko_1_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope._, $scope._.n + 1);
}));
const $updateoutlet_content__n = /* @__PURE__ */ _closure_get("n", ($scope) => {
	_text($scope["#text/1"], $scope._.n);
	$updateoutlet_content__n__script($scope);
});
const $updateoutlet_content__setup = $updateoutlet_content__n;
const $n__closure = /* @__PURE__ */ _closure($updateoutlet_content__n);
const $n = /* @__PURE__ */ _let("n/1", $n__closure);
const $outlet = /* @__PURE__ */ _outlet("#text/0", "<button id=b>count: <!></button>", " Db%l", $updateoutlet_content__setup);
function $setup($scope) {
	$n($scope, 0);
	$outlet($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
