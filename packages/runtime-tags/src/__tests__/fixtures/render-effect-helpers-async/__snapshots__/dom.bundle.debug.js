// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($walks$1);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "ready");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$await_content($scope);
	$await_promise($scope, resolveAfter(0, 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
