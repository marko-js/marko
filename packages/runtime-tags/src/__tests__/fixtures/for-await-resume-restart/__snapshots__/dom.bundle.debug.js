// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		yield resolveAfter(item, ++tick);
	}
}
const $forawait_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $forawait_content__item = ($scope, item) => _text($scope["#text/1"], item);
const $forawait_content__$params = ($scope, $params2) => $forawait_content__item($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "Waiting...");
const $try_content__for_await = /*@__PURE__*/ _for_await("#text/0", "<li>#<!>: <!></li>", "Db%c%", $forawait_content__setup, $forawait_content__$params);
const $try_content__mounted = /*@__PURE__*/ _closure_get("mounted", ($scope) => $try_content__for_await($scope, [stream([
	"a",
	"b",
	$scope._.mounted ? "hello" : "goodbye"
])]));
const $try_content__setup = $try_content__mounted;
const $mounted__closure = /*@__PURE__*/ _closure($try_content__mounted);
const $mounted = /*@__PURE__*/ _let("mounted/1", $mounted__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<ul><!></ul>", "D%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	$mounted($scope, undefined);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
