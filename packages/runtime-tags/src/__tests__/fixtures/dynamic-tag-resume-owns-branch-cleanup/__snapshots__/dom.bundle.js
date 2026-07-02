// tags/child.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("b0", 0, 0, _script("b1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "dyn destroyed";
} }))));
const $show$1 = ($scope, show) => $dynamicTag($scope, show ? "div" : null);

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
