// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if = /* @__PURE__ */ _if("#text/0", "<span></span>", "b");
const $input_value = ($scope, input_value) => $if($scope, input_value ? 0 : 1);
function $setup$1($scope) {
	_return($scope, 1);
}
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` D l0${_w0}&b`)("b%c");
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_value($scope["#childScope/2"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	_var($scope, "#childScope/2", $x);
	$setup$1($scope["#childScope/2"]);
	$count($scope, 1);
}
const $x = _var_resume("__tests__/template.marko_0_x/var", ($scope, x) => {});
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
