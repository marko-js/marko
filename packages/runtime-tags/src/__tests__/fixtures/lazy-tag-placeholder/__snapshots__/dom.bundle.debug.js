// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<!><!><button>click</button>";
const $walks = "b%b b";
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading...", "b");
const $try_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $load_Child_tag_input_value($scope["#childScope/1"], $scope._.count));
const $try_content__setup = ($scope) => {
	$try_content__count($scope);
	$load_Child_setup($scope);
};
const $count__closure = /*@__PURE__*/ _closure($try_content__count);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});
const $input_value = $count;
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%/&c", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
