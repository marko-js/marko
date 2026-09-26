// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__obj = /*@__PURE__*/ _const("obj");
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope.obj);
}));
const $await_content__setup = ($scope) => {
	$await_content__obj($scope, { get bad() {
		throw new Error("getter failed");
	} });
	$await_content__setup__script($scope);
};
const $await_content__value = ($scope, value) => _text($scope["#text/1"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter(1, 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
