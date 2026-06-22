// tags/leaf.marko
const $template$2 = "<p>leaf</p>";
const $walks$2 = "b";
const $setup__script = _script("__tests__/tags/leaf.marko_0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "leaf destroyed";
} }));
const $setup$2 = $setup__script;
var leaf_default = /* @__PURE__ */ _template("__tests__/tags/leaf.marko", $template$2, "b", $setup$2);

// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__setup$1 = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $if$1 = /* @__PURE__ */ _if("#text/0", $template$2, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("b"), $if_content__setup$1);
const $show$1 = ($scope, show) => $if$1($scope, show ? 0 : 1);
const $input = ($scope, input) => $show$1($scope, input.show);
var wrapper_default = /* @__PURE__ */ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<div id=ref>init</div><button id=o>O</button><button id=s>S</button><!><!>";
const $walks = "b b b%c";
const $if_content__show = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => $show$1($scope["#childScope/0"], $scope._.show));
const $if_content__setup = ($scope) => {
	$if_content__show._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/2", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer__script = _script("__tests__/template.marko_0_outer", ($scope) => _on($scope["#button/0"], "click", function() {
	$outer($scope, !$scope.outer);
}));
const $outer = /* @__PURE__ */ _let("outer/3", ($scope) => {
	$if($scope, $scope.outer ? 0 : 1);
	$outer__script($scope);
});
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/4", ($scope) => {
	$if_content__show($scope);
	$show__script($scope);
});
function $setup($scope) {
	$outer($scope, true);
	$show($scope, false);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
