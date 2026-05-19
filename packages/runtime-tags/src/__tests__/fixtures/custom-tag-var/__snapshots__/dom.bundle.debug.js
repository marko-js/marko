// tags/child.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $x__script = _script("__tests__/tags/child.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	_return($scope, $scope.x);
	$x__script($scope);
});
function $setup$1($scope) {
	$x($scope, 1);
}
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<div> </div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `0${_w0}&D l`)($walks$1);
const $data = _var_resume("__tests__/template.marko_0_data/var", ($scope, data) => _text($scope["#text/2"], data));
function $setup($scope) {
	_var($scope, "#childScope/0", $data);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
