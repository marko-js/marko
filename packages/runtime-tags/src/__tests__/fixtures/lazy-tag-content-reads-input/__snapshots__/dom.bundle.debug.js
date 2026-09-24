// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_content = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_content.mjs"));
const $Child_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => _text($scope["#text/0"], $scope._.input_value), 0, "__tests__/template.marko_1_input_value#4/subscribe");
const $Child_content__setup = $Child_content__input_value;
const $Child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<div> </div>", "D ", $Child_content__setup);
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_content($scope["#childScope/1"], $Child_content($scope));
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value__closure = /*@__PURE__*/ _closure($Child_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// child.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D%l", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D%l",
	$setup
];
