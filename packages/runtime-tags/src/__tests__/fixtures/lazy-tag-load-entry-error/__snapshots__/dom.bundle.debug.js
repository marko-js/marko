// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_label.mjs")));
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<div id=error>failed</div>");
const $try_content__input_label = /*@__PURE__*/ _closure_get("input_label", ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._.input_label));
const $try_content__setup = ($scope) => {
	$try_content__input_label($scope);
	$load_Child_setup($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%/&", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($try_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
