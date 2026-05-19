// template.marko
const $template = "<div></div>";
const $walks = " b";
const $if_content__mounted = /* @__PURE__ */ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.mounted && "C"));
const $if_content__setup = $if_content__mounted;
const $if = /* @__PURE__ */ _if("#div/0", "AB<!>D", "b%c", $if_content__setup);
const $mounted = /* @__PURE__ */ _let("mounted/1", ($scope) => {
	$if($scope, $scope.mounted ? 0 : 1);
	$if_content__mounted($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	$mounted($scope, undefined);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
