// total: 8104 (min) 3674 (brotli)
// tags/child.marko: 68 (min) 63 (brotli)
const $template = "<div> </div>";
const $setup = () => {};
const $input_name__OR__input_write__script = _script("b0", ($scope) => $signal($scope, 0).onabort = () => {
	$scope.e(`destroyed ${$scope.d}`);
});
const $input_name__OR__input_write = /* @__PURE__ */ _or(5, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_write__script($scope);
});
const $name = /* @__PURE__ */ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_name__OR__input_write($scope);
});
const $write$1 = /* @__PURE__ */ _const(4, $input_name__OR__input_write);

// template.marko: 676 (min) 350 (brotli)
const $for_content2__write = /* @__PURE__ */ _closure_get(4, ($scope) => $write$1($scope.a, $scope._._.e), ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__write($scope);
	$for_content2__outerItem._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $for_content2__outerItem__OR__middleItem = /* @__PURE__ */ _or(3, ($scope) => $name($scope.a, `${$scope._.d}.${$scope.c}`));
const $for_content2__outerItem = /* @__PURE__ */ _for_closure(1, $for_content2__outerItem__OR__middleItem);
const $for_content2__middleItem = /* @__PURE__ */ _const(2, $for_content2__outerItem__OR__middleItem);
const $for_content2__$params = ($scope, $params3) => $for_content2__middleItem($scope, $params3[0]);
const $for_content__for = /* @__PURE__ */ _for_of(1, /* @__PURE__ */ ((_w0) => `<div>${_w0}</div>`)($template), /* @__PURE__ */ ((_w0) => `D/${_w0}&l`)("D l"), $for_content2__setup, $for_content2__$params);
const $for_content__items = /* @__PURE__ */ _for_closure(2, ($scope) => $for_content__for($scope, [$scope._.d]));
const $for_content__setup = ($scope) => {
	$for_content__items._($scope);
	$for_content__write._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $for_content__write = /* @__PURE__ */ _for_closure(2, ($scope) => $write$1($scope.a, $scope._.e));
const $for_content__outerItem = /* @__PURE__ */ _const(3, ($scope) => {
	$name($scope.a, `${$scope.d}`);
	$for_content2__outerItem($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__outerItem($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of(2, /* @__PURE__ */ ((_w0) => `<div>${_w0}<!></div>`)($template), /* @__PURE__ */ ((_w0) => `D/${_w0}&%l`)("D l"), $for_content__setup, $for_content__$params);
const $items__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.d?.length ? $scope.d.slice(0, -1) : [
		1,
		2,
		3
	]);
}));
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$for($scope, [$scope.d]);
	$for_content__items($scope);
	$items__script($scope);
});
function $write($scope) {
	return function(msg) {
		$scope.b.innerHTML += "\n" + msg;
	};
}
_resume("a0", $write);
