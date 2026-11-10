// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_GrandChild_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:grand-child.marko.setup.mjs"));
let $load_GrandChild_tag_input_onPress = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_onPress.mjs"));
function $setup($scope) {
	$load_GrandChild_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_GrandChild_tag_input_onPress($scope["#childScope/1"], $onPress);
}
function $onPress() {
	console.log("pressed");
}
_resumed["__tests__/child.marko_0/onPress"] = $onPress;
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup);

// grand-child.marko
const $template = "<button>press</button>";
const $walks = " b";
const $setup = ($_) => {};
const $input_onPress__script = _script("__tests__/grand-child.marko_0_input_onPress#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /*@__PURE__*/ _const("input_onPress", $input_onPress__script);
const $input = ($scope, input) => $input_onPress($scope, input.onPress);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, " b", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:grand-child.marko.setup.js
const _ = [
	$template,
	" b",
	$setup
];
