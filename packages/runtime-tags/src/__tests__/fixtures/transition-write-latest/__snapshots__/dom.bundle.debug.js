// get-data.ts
let calls = 0;
function getData(id) {
	return resolveAfter({
		id,
		call: ++calls
	}, calls + 3);
}

// template.marko
const $template = "<button id=inc> </button><button id=back>back</button><!><!>";
const $walks = " D l b%c";
_enable_catch();
const $await_content__data = /*@__PURE__*/ _render(($scope, data) => _text($scope["#text/0"], JSON.stringify(data)));
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING...", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<pre> </pre>", "D l");
_enable_transition();
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__id = /*@__PURE__*/ _closure_get("id", ($scope) => $try_content__await_promise($scope, getData($scope._.id)));
const $try_content__setup = ($scope) => {
	$try_content__id($scope);
	$await_content($scope);
};
const $id__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.id));
const $id__closure = /*@__PURE__*/ _closure($try_content__id);
const $id = /*@__PURE__*/ _let("id/4", ($scope) => {
	$id__render($scope);
	$id__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$id($scope, $scope.id + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$id($scope, 2);
	});
});
function $setup($scope) {
	$id($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
