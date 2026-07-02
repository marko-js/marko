// template.marko
const $template = "<title></title><button>+</button><div></div>";
const $walks = " b b b";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => {
	$scope.count;
	_el_read($scope["#div/2"]).textContent = document.title;
});
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text_content($scope["#title/0"], `Count is ${_to_text($scope.count)}`);
	$count__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
