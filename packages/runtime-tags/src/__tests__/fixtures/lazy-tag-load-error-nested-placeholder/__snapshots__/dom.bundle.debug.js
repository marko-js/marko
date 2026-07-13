// child.marko
const $template = "<span id=child>child</span>";
const $walks = "b";
const $setup = () => {};
await rejectAfter(new Error("load failed"), 2);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_4_content", "caught: <!>", "b%b", 0, $catch_content__$params);
const $try_content2__setup = $load_Child_setup;
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading outer...", "b");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%/&c", $try_content2__setup);
const $try_content__setup = ($scope) => $try_content__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
