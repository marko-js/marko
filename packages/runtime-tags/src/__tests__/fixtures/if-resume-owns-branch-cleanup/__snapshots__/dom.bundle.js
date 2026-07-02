// tags/child.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $if$1 = /* @__PURE__ */ _if(0, "<p>inner</p>", "b", _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "inner destroyed";
} })));
const $show$1 = ($scope, show) => $if$1($scope, show ? 0 : 1);

// template.marko
const $if_content__show = /* @__PURE__ */ _if_closure(2, 0, ($scope) => $show$1($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__show._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /* @__PURE__ */ _if(2, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer = /* @__PURE__ */ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $show = /* @__PURE__ */ _let(4, $if_content__show);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		$show($scope, !$scope.e);
	});
});
