// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $doubled__OR__tripled = ($scope) => {
	_text($scope["#text/0"], $scope.input_n * 2 + $scope.input_n * 3);
};
const $input_n = /* @__PURE__ */ _const("input_n", $doubled__OR__tripled);
const $input = ($scope, input) => $input_n($scope, input.n);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}& b`)("D l");
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/2", ($scope) => {
	$input_n($scope["#childScope/0"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$n($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
