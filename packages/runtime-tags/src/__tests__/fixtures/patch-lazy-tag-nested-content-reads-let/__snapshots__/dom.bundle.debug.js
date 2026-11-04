// tags/inner.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%/&c";
let $load_Inner_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:inner.marko.setup.mjs"));
let $load_Inner_tag_input_content = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:inner.marko.input_content.mjs"), "ready:__tests__/tags/inner.marko");
let $load_Outer_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:outer.marko.setup.mjs"));
let $load_Outer_tag_input_content = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:outer.marko.input_content.mjs"), "ready:__tests__/tags/outer.marko");
const $Inner_content2__b__script = _script("__tests__/template.marko_4_b#2:2", ($scope) => console.log($scope._.b));
const $Inner_content2__b = /*@__PURE__*/ _closure_get("b/8", $Inner_content2__b__script, 0, "__tests__/template.marko_4_b#2:2/subscribe");
const $Inner_content2__setup = $Inner_content2__b;
const $Inner_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", 0, 0, $Inner_content2__setup);
const $Inner_content__a__script = _script("__tests__/template.marko_3_a#1:2", ($scope) => console.log($scope._.a));
const $Inner_content__a = /*@__PURE__*/ _closure_get("a/8", $Inner_content__a__script, 0, "__tests__/template.marko_3_a#1:2/subscribe");
const $Inner_content__setup = $Inner_content__a;
const $Inner_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", 0, 0, $Inner_content__setup);
const $Outer_content2__b__closure = /*@__PURE__*/ _closure($Inner_content2__b);
const $Outer_content2__b = _let("b/2", $Outer_content2__b__closure);
const $Outer_content2__input_a = /*@__PURE__*/ _closure_get("input_a/7", ($scope) => $Outer_content2__b($scope, $scope._.input_a), 0, "__tests__/template.marko_2_input_a#0:6/subscribe");
const $Outer_content2__setup = ($scope) => {
	$Outer_content2__input_a($scope);
	$load_Inner_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Inner_tag_input_content($scope["#childScope/1"], $Inner_content2($scope));
};
const $Outer_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%/&", $Outer_content2__setup);
const $Outer_content__a__closure = /*@__PURE__*/ _closure($Inner_content__a);
const $Outer_content__a = _let("a/2", $Outer_content__a__closure);
const $Outer_content__input_a = /*@__PURE__*/ _closure_get("input_a/7", ($scope) => $Outer_content__a($scope, $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:6/subscribe");
const $Outer_content__setup = ($scope) => {
	$Outer_content__input_a($scope);
	$load_Inner_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Inner_tag_input_content($scope["#childScope/1"], $Inner_content($scope));
};
const $Outer_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%/&", $Outer_content__setup);
function $setup($scope) {
	$load_Outer_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Outer_tag_input_content($scope["#childScope/1"], $Outer_content($scope));
	$load_Outer_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$load_Outer_tag_input_content($scope["#childScope/3"], $Outer_content2($scope));
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($Outer_content__input_a, $Outer_content2__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/v:inner.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];

// tags/v:outer.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
