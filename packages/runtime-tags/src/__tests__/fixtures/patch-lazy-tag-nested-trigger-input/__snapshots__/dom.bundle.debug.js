// template.marko
const $template = "<main><!></main>";
const $walks = "D%/&l";
let $load_Outer_setup = /*@__PURE__*/ _load_setup(() => import("./v:outer.marko.setup.mjs"));
let $load_Outer_tag_input_label = /*@__PURE__*/ _load_signal_patch(() => import("./v:outer.marko.input_label.mjs"), "ready:__tests__/outer.marko");
function $setup($scope) {
	$load_Outer_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $input_label = ($scope, input_label) => $load_Outer_tag_input_label($scope["#childScope/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// inner.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/inner.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/inner.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var inner_default = /*@__PURE__*/ _template("__tests__/inner.marko", $template, $walks, $setup, $input);

// outer.marko
const $template = "<section><!></section>";
const $walks = "D%/&l";
const $load_Inner_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Inner_setup = /*@__PURE__*/ _load_setup(/*@__PURE__*/ $load_Inner_trigger(() => import("./v:inner.marko.setup.mjs")));
let $load_Inner_tag_input_label = /*@__PURE__*/ _load_signal_patch(() => import("./v:inner.marko.input_label.mjs"), "ready:__tests__/inner.marko", $load_Inner_trigger);
function $setup($scope) {
	$load_Inner_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
const $input_label = ($scope, input_label) => $load_Inner_tag_input_label($scope["#childScope/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var outer_default = /*@__PURE__*/ _template("__tests__/outer.marko", $template, $walks, $setup, $input);

// v:inner.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// v:outer.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
