// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_visible_trigger("#footer");
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_value = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.value.mjs")));
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "loading...");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<footer id=footer>late</footer>");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 4));
};
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$load_Child_setup($scope);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input_value = ($scope, input_value) => $load_Child_tag_value($scope["#childScope/1"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<div>child <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $value = ($scope, value) => _text($scope["#text/0"], value);
const $input = ($scope, input) => $value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
