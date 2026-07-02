// tags/leaf.marko
const $template = "<!><!><!>";
const $setup = () => {};
const $if_content__input_n = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $if$1 = /* @__PURE__ */ _if(0, "<div>n is <!></div>", "Db%l", $if_content__input_n);
const $n$1 = /* @__PURE__ */ _const(3, ($scope) => {
	$if$1($scope, $scope.d ? 0 : 1);
	$if_content__input_n($scope);
});

// template.marko
const $if_content__n = /* @__PURE__ */ _if_closure(2, 0, ($scope) => $n$1($scope.a, $scope._.e));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $if = /* @__PURE__ */ _if(2, /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer = /* @__PURE__ */ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $n = /* @__PURE__ */ _let(4, $if_content__n);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		$n($scope, $scope.e + 1);
	});
});
