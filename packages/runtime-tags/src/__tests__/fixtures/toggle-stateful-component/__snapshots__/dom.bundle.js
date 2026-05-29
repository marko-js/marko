// total: 6500 (min) 2979 (brotli)
// tags/counter.marko: 251 (min) 156 (brotli)
const $template = "<button> </button>";
const $walks = " D l";
const $input_onCount__OR__clickCount = /* @__PURE__ */ _or(6, _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.e($clickCount($scope, $scope.f + 1));
})));
const $clickCount = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, ((() => {
		if ($scope.f > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
	})(), $scope.f));
	$input_onCount__OR__clickCount($scope);
});
function $setup($scope) {
	$clickCount($scope, 0);
}
const $input_onCount = /* @__PURE__ */ _const(4, $input_onCount__OR__clickCount);

// template.marko: 228 (min) 163 (brotli)
const $if_content__onCount = /* @__PURE__ */ _if_closure(0, 0, ($scope) => $input_onCount($scope.a, $scope._.c));
const $if_content__setup = ($scope) => {
	$if_content__onCount._($scope);
	$setup($scope.a);
};
const $if = /* @__PURE__ */ _if(0, /* @__PURE__ */ ((_w0) => `<div>${_w0}</div>`)($template), /* @__PURE__ */ ((_w0) => `D/${_w0}&l`)($walks), $if_content__setup);
const $show = /* @__PURE__ */ _let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
function $onCount($scope) {
	return function(count) {
		$show($scope, count < 1);
	};
}
_resume("a0", $onCount);
