// tags/child.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $for_content__setup__script = _script("b0", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "item destroyed";
} }));
const $for_content__setup = ($scope) => {
	_text($scope.a, $scope.M);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to(0, "<p>item <!></p>", "Db%l", $for_content__setup);
const $count$1 = ($scope, count) => $for($scope, [
	count,
	0,
	1
]);

// template.marko
const $if_content__count = /* @__PURE__ */ _if_closure(2, 0, ($scope) => $count$1($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /* @__PURE__ */ _if(2, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer = /* @__PURE__ */ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $count = /* @__PURE__ */ _let(4, $if_content__count);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		$count($scope, $scope.e + 1);
	});
});
