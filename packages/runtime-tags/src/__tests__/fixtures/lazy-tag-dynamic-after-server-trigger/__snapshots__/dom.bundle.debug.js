// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button class=toggle>toggle</button><span id=go>go</span><!><!><!>";
const $walks = " c%/&b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_event_trigger("click", "#go"));
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", /*@__PURE__*/ $load_Child_trigger(($_) => import("./child.mjs").then((mod) => mod.default)));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.input_label.mjs")));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $dynamicTag($scope, $scope.show ? Child : null, ($_) => ({ label: "dynamic" })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$load_Child_tag_input_label($scope["#childScope/2"], "server");
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
