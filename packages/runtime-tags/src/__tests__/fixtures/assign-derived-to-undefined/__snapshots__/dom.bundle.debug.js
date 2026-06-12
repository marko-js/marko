// template.marko
const $template = "<div><!>|<!></div><button>update</button>";
const $walks = "D%c%l b";
const $list = /* @__PURE__ */ _let("list/3", ($scope) => {
	$first($scope, $scope.list[0]);
	$second($scope, $scope.list[1]);
});
const $first = /* @__PURE__ */ _const("first", ($scope) => _text($scope["#text/0"], $scope.first));
const $second = /* @__PURE__ */ _const("second", ($scope) => _text($scope["#text/1"], $scope.second));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$list($scope, [4]);
}));
function $setup($scope) {
	$list($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
