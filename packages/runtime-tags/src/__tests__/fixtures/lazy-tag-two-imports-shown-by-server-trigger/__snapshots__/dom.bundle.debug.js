// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// tags/other.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%/&c";
const $load_Child_trigger$1 = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_event_trigger("click", "#go"));
let $load_Child_setup$1 = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger$1(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label$1 = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger$1(($_) => import("./v:child.marko.input_label.mjs")));
function $setup$1($scope) {
	$load_Child_setup$1($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label$1($scope["#childScope/1"], "other");
}
var other_default = /*@__PURE__*/ _template("__tests__/tags/other.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<button id=go>go</button><!><!><!>";
const $walks = " b%/&b%c";
const $load_Child_trigger = /*@__PURE__*/ _load_trigger("ready:__tests__/child.marko", /*@__PURE__*/ _load_event_trigger("click", "#go"));
let $load_Child_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(($_) => import("./v:child.marko.input_label.mjs")));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Child_tag_input_label($scope["#childScope/1"], "tag");
	$setup$1($scope["#childScope/2"]);
};
const $if = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b%/&b/${_w0}&b`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
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
