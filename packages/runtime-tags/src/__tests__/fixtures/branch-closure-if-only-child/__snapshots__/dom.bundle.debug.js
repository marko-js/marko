// template.marko
const $template = "<button> </button><div></div>";
const $walks = " D l b";
const $if_content__count = /* @__PURE__ */ _if_closure("#div/2", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
	$count__script($scope);
});
const $if = /* @__PURE__ */ _if("#div/2", " ", " b", $if_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#div/2"], "click", function() {}));
function $setup($scope) {
	$count($scope, 0);
	$if($scope, true ? 0 : 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
