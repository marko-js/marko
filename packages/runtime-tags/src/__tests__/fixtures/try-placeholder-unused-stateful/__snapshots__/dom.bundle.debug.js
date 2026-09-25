// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $placeholder_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("placeholder mounted");
	},
	onDestroy: function() {
		console.log("placeholder destroyed");
	}
}));
const $placeholder_content__setup = $placeholder_content__setup__script;
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " loading", 0, $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "done");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
