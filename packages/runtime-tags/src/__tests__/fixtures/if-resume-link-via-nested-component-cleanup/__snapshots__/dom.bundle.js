// tags/leaf.marko
const $template$1 = "<p>leaf</p>";
const $setup__script = _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "leaf destroyed";
} }));
const $setup$1 = $setup__script;

// tags/wrapper.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $if_content__setup$1 = ($scope) => {
	$setup$1($scope.a);
};
const $if$1 = /* @__PURE__ */ _if(0, $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("b"), $if_content__setup$1);
const $show$1 = ($scope, show) => $if$1($scope, show ? 0 : 1);

// template.marko
const $if_content__show = /* @__PURE__ */ _if_closure(2, 0, ($scope) => $show$1($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__show._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /* @__PURE__ */ _if(2, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$outer($scope, !$scope.d);
}));
const $outer = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$outer__script($scope);
});
const $show__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.e);
}));
const $show = /* @__PURE__ */ _let(4, ($scope) => {
	$if_content__show($scope);
	$show__script($scope);
});
