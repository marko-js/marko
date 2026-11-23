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
const $template = "<button class=press>press</button>";
const $walks = " b";
const $setup = ($_) => {};
const $input_onPress__script = _script("__tests__/grand-child.marko_0_input_onPress#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /*@__PURE__*/ _const("input_onPress", $input_onPress__script);
const $input = ($scope, input) => $input_onPress($scope, input.onPress);
var grand_child_default = /*@__PURE__*/ _template("__tests__/grand-child.marko", $template, " b", 0, $input);

// other.marko
const $template = "<span>other loaded</span>";
const $walks = "b";
const $setup = ($_) => {};
var other_default = /*@__PURE__*/ _template("__tests__/other.marko", $template, "b");

// template.marko
const $template = "<button class=toggle>toggle</button><span id=go>go</span><span id=other>other</span><!><!><!><!>";
const $walks = " d%/&b%/&b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_event_trigger("click", "#go"));
const $load_Other_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/other.marko", /*@__PURE__*/ _load_event_trigger("click", "#other"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Other_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Other_trigger(($_) => import("./v:other.marko.setup.mjs")));
const $if_content__setup = ($scope) => $load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
const $if = /*@__PURE__*/ _if("#text/5", "<!><!><!>", "b%/&", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Other_setup($scope, $scope["#childScope/4"], $scope["#text/3"]);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

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

// v:other.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
