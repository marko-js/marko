// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "LOADING...", "b");
const $await_content__id__OR__count = /*@__PURE__*/ _or(10, _script("a4", ($scope) => console.log("A", JSON.stringify({
	id: $scope._._.b,
	count: $scope._._.d
}))));
const $await_content__id__OR__payloadId__OR__data = /*@__PURE__*/ _or(9, _script("a3", ($scope) => console.log("B", JSON.stringify({
	id: $scope._._.b,
	payloadId: $scope._._.c,
	data: $scope.i
}))), 2);
const $await_content__id__render = /*@__PURE__*/ _render(($scope) => {
	_text($scope.a, $scope._._.b);
	_text($scope.e, $scope._._.b);
});
const $await_content__id = /*@__PURE__*/ _closure_get(4, ($scope) => {
	$await_content__id__render($scope);
	$await_content__id__OR__count($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
}, ($scope) => $scope._._, "a0");
const $await_content__setup__script = _script("a5", ($scope) => {
	_on($scope.d, "click", function() {
		$id($scope._._, $scope._._.b + 1);
	});
	_on($scope.f, "click", function() {
		$count($scope._._, $scope._._.d + 1);
	});
});
const $await_content__payloadId__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope._._.c));
const $await_content__payloadId = /*@__PURE__*/ _closure_get(5, ($scope) => {
	$await_content__payloadId__render($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
}, ($scope) => $scope._._, "a1");
const $await_content__count__render = /*@__PURE__*/ _render(($scope) => _text($scope.g, $scope._._.d));
const $await_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => {
	$await_content__count__render($scope);
	$await_content__id__OR__count($scope);
}, ($scope) => $scope._._, "a2");
const $await_content__data__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, JSON.stringify($scope.i)));
const $await_content__data = /*@__PURE__*/ _const(8, ($scope) => {
	$await_content__data__render($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__payloadId = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__await_promise($scope, resolveAfter({ id: $scope._.c })), 0, "a8");
const $payloadId = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__payloadId, $await_content__payloadId));
const $id__closure = /*@__PURE__*/ _closure($await_content__id);
const $id = /*@__PURE__*/ _let(1, ($scope) => {
	$payloadId($scope, $scope.b * 100);
	$id__closure($scope);
});
const $count = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($await_content__count));
