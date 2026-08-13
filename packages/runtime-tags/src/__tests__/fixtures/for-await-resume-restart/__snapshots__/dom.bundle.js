// template.marko
async function* stream(items) {
	let tick = 0;
	for (const item of items) yield resolveAfter(item, ++tick);
}
const $forawait_content__setup = ($scope) => _text($scope.a, $scope.M);
const $forawait_content__item = ($scope, item) => _text($scope.b, item);
const $forawait_content__$params = ($scope, $params2) => $forawait_content__item($scope, $params2[0]);
const $placeholder_content = _content_resume("a0", "Waiting...");
const $try_content__for_await = /*@__PURE__*/ _for_await(0, "<li>#<!>: <!></li>", "Db%c%", $forawait_content__setup, $forawait_content__$params);
const $try_content__mounted = /*@__PURE__*/ _closure_get(2, ($scope) => $try_content__for_await($scope, [stream([
	"a",
	"b",
	$scope._.b ? "hello" : "goodbye"
])]));
const $mounted = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($try_content__mounted));
const $setup__script = _script("a2", ($scope) => $mounted($scope, true));
