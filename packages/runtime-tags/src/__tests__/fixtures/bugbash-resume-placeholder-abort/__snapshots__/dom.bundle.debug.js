// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content__setup__script = _script("__tests__/template.marko_2", ($scope) => {
	console.log("ph script ran");
	$signal($scope, 0).onabort = () => console.log("ph aborted");
});
const $placeholder_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "<div>loading</div>", "b", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("v", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
