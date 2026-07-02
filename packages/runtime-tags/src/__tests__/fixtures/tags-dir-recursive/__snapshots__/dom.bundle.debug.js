// tags/tree/index.marko
const $template$1 = "<div>d<!><!></div>";
const $walks$1 = "Db%b%l";
const $setup$1 = () => {};
const $if_content__input_depth = /* @__PURE__ */ _if_closure("#text/1", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/1", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_depth = /* @__PURE__ */ _const("input_depth", ($scope) => {
	_text($scope["#text/0"], $scope.input_depth);
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var tree_default = /* @__PURE__ */ _template("__tests__/tags/tree/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>inc <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $n = /* @__PURE__ */ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_depth($scope["#childScope/2"], $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$n($scope, 2);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
