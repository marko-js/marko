// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Layout_setup = /*@__PURE__*/ _load_setup(() => import("./v:layout.marko.setup.mjs"));
let $load_Layout_tag_input_content = /*@__PURE__*/ _load_signal(() => import("./v:layout.marko.input_content.mjs"));
const $Layout_content__input_value = /*@__PURE__*/ _closure_get("input_value/5", ($scope) => _text($scope["#text/0"], $scope._.input_value), 0, "__tests__/template.marko_1_input_value#0:4/subscribe");
const $Layout_content__setup = $Layout_content__input_value;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $Layout_content__setup);
function $setup($scope) {
	$load_Layout_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Layout_tag_input_content($scope["#childScope/1"], $Layout_content($scope));
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value__closure = /*@__PURE__*/ _closure($Layout_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// layout.marko
const $template = "<!><html><head><title>Layout</title></head><body><!></body></html>";
const $walks = "bDbD%m";
const $setup = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template, $walks, 0, $input);

// v:layout.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
