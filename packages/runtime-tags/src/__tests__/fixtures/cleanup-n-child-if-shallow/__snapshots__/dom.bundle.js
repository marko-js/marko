// total: 6245 (min) 2835 (brotli)
// tags/child.marko: 90 (min) 72 (brotli)
const $template = "<div>a</div><span>b</span><p>c</p>";
const $setup = () => {};
const $input__script = _script("b0", ($scope) => {
	$scope.b.write("mounted");
	$signal($scope, 0).onabort = () => {
		$scope.b.write("destroyed");
	};
});
const $input = /* @__PURE__ */ _const(1, ($scope) => {
	$signalReset($scope, 0);
	$input__script($scope);
});

// template.marko: 235 (min) 166 (brotli)
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup($scope.a);
	$input($scope.a, { write: $write($scope) });
};
const $if = /* @__PURE__ */ _if(2, $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("d"), $if_content__setup);
const $show__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show__script($scope);
});
function $write($scope) {
	return function(state) {
		$scope._.b.innerHTML = state;
	};
}
_resume("a0", $write);
