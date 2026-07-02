// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $for_content__count = /* @__PURE__ */ _for_closure("#text/0", ($scope) => _text($scope["#text/1"], $scope._.count));
const $for_content__setup = ($scope) => {
	$for_content__count._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$for_content__count($scope);
});
const $for = /* @__PURE__ */ _for_to("#text/0", "<!>-<!>", "%c%b", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$for($scope, [
		3,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
