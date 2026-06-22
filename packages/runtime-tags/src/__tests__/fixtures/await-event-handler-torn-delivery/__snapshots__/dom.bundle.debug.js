// template.marko
const $template = "<div id=start>start</div><!><div id=end>end</div>";
const $walks = "b%c";
_enable_catch();
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log("clicked");
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<button id=a> </button>", " D l", $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("v", 1));
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
