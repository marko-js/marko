// get-data.ts
let calls = 0;
function getData(id) {
	return resolveAfter({
		id,
		call: ++calls
	}, calls + 3);
}

// template.marko
_enable_catch();
const $await_content__data = /*@__PURE__*/ _render(($scope, data) => _text($scope.a, JSON.stringify(data)));
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "LOADING...", "b");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__id = /*@__PURE__*/ _closure_get(5, ($scope) => $try_content__await_promise($scope, getData($scope._.e)));
const $id__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.e));
const $id__closure = /*@__PURE__*/ _closure($try_content__id);
const $id = /*@__PURE__*/ _let(4, ($scope) => {
	$id__render($scope);
	$id__closure($scope);
});
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$id($scope, $scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$id($scope, 2);
	});
});
