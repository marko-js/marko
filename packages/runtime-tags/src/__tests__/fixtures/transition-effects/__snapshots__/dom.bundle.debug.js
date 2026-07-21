// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "LOADING...", "b");
const $await_content__id__OR__count__script = _script("__tests__/template.marko_2_id_count", ($scope) => console.log("A", JSON.stringify({
	id: $scope._._.id,
	count: $scope._._.count
})));
const $await_content__id__OR__count = /*@__PURE__*/ _or(10, $await_content__id__OR__count__script);
const $await_content__id__OR__payloadId__OR__data__script = _script("__tests__/template.marko_2_id_payloadId_data", ($scope) => console.log("B", JSON.stringify({
	id: $scope._._.id,
	payloadId: $scope._._.payloadId,
	data: $scope.data
})));
const $await_content__id__OR__payloadId__OR__data = /*@__PURE__*/ _or(9, $await_content__id__OR__payloadId__OR__data__script, 2);
const $await_content__id__render = /*@__PURE__*/ _render(($scope) => {
	_text($scope["#text/0"], $scope._._.id);
	_text($scope["#text/4"], $scope._._.id);
});
const $await_content__id = /*@__PURE__*/ _closure_get("id", ($scope) => {
	$await_content__id__render($scope);
	$await_content__id__OR__count($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_id/pending");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => {
	_on($scope["#button/3"], "click", function() {
		$id($scope._._, $scope._._.id + 1);
	});
	_on($scope["#button/5"], "click", function() {
		$count($scope._._, $scope._._.count + 1);
	});
});
const $await_content__setup = ($scope) => {
	$await_content__id($scope);
	$await_content__payloadId($scope);
	$await_content__count($scope);
	$await_content__setup__script($scope);
};
const $await_content__payloadId__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope._._.payloadId));
const $await_content__payloadId = /*@__PURE__*/ _closure_get("payloadId", ($scope) => {
	$await_content__payloadId__render($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_payloadId/pending");
const $await_content__count__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/6"], $scope._._.count));
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => {
	$await_content__count__render($scope);
	$await_content__id__OR__count($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_count/pending");
const $await_content__data__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], JSON.stringify($scope.data)));
const $await_content__data = /*@__PURE__*/ _const("data", ($scope) => {
	$await_content__data__render($scope);
	$await_content__id__OR__payloadId__OR__data($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<h2>Id: <!> --> <!></h2><pre> </pre><button id=inc> </button><button id=count> </button>", "Db%c%lD l D l D l", $await_content__setup);
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__payloadId = /*@__PURE__*/ _closure_get("payloadId", ($scope) => $try_content__await_promise($scope, resolveAfter({ id: $scope._.payloadId })), 0, "__tests__/template.marko_1_payloadId/pending");
const $try_content__setup = ($scope) => {
	$try_content__payloadId($scope);
	$await_content($scope);
};
const $payloadId__closure = /*@__PURE__*/ _closure($try_content__payloadId, $await_content__payloadId);
const $payloadId = /*@__PURE__*/ _const("payloadId", $payloadId__closure);
const $id__closure = /*@__PURE__*/ _closure($await_content__id);
const $id = /*@__PURE__*/ _let("id/1", ($scope) => {
	$payloadId($scope, $scope.id * 100);
	$id__closure($scope);
});
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/3", $count__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$id($scope, 1);
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
