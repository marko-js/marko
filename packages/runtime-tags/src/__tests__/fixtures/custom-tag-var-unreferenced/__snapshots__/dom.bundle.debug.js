// tags/child.marko
const $template$1 = "<div>from child</div>";
const $walks$1 = "b";
function $setup$1($scope) {
	_return($scope, 42);
}
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` D l0${_w0}&`)("b");
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
