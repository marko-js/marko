// total: 7489 (min) 3453 (brotli)
// tags/child.marko: 92 (min) 72 (brotli)
const $template = "<div> </div><span> </span><p> </p>";
const $walks = "D lD lD l";
const $setup = () => {};
const $input_name__OR__input_write__script = _script("b0", ($scope) => {
	$scope.g(`mounted ${$scope.f}`);
	$signal($scope, 0).onabort = () => {
		$scope.g(`destroyed ${$scope.f}`);
	};
});
const $input_name__OR__input_write = /* @__PURE__ */ _or(7, ($scope) => {
	$signalReset($scope, 0);
	$input_name__OR__input_write__script($scope);
});
const $name = /* @__PURE__ */ _const(5, ($scope) => {
	_text($scope.a, $scope.f);
	_text($scope.b, $scope.f);
	_text($scope.c, $scope.f);
	$input_name__OR__input_write($scope);
});
const $write$1 = /* @__PURE__ */ _const(6, $input_name__OR__input_write);

// template.marko: 342 (min) 227 (brotli)
const $for_content__write = /* @__PURE__ */ _for_closure(2, ($scope) => $write$1($scope.a, $scope._.e));
const $for_content__setup = ($scope) => {
	$for_content__write._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $for_content__item = ($scope, item) => $name($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of(2, $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks), $for_content__setup, $for_content__$params);
const $items__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.d?.length ? $scope.d.slice(0, -1) : [
		1,
		2,
		3
	]);
}));
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$for($scope, [$scope.d]);
	$items__script($scope);
});
function $write($scope) {
	return function(msg) {
		$scope.b.innerHTML += "\n" + msg;
	};
}
_resume("a0", $write);
