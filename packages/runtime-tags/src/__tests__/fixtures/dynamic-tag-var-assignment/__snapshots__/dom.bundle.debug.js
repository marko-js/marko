// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	_return($scope, $scope.x);
});
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
	$x($scope, 1);
	$setup__script$1($scope);
}
function $valueChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("__tests__/tags/counter.marko_0/valueChange", $valueChange);
var counter_default = /* @__PURE__ */ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><button class=reset>reset</button>";
const $walks = "b1b b";
function getCounter() {
	return counter_default;
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, () => $count);
const $count = _var_resume("__tests__/template.marko_0_count/var", ($scope, count) => {});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["BranchScopes:#text/0"], 0, "count");
}));
function $setup($scope) {
	$dynamicTag($scope, getCounter());
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
