// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
_enable_catch();
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $catch_content2 = _content_resume("__tests__/template.marko_5_content", "Rejected B", "b");
const $await_content2 = /* @__PURE__ */ _await_content("#text/0", "<div>Resolved B: <!></div>", "Db%l");
const $try_content2__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("rejected b"), 1));
};
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "Rejected A", "b");
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<div>Resolved A: <!></div>", "Db%l");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("A Value", 2));
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $try2 = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content2__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$try2($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
