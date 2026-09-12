// child.marko
const $template = "<b>t</b><!><!>";
const $walks = " b%c";
const $if = /*@__PURE__*/ _if("#text/1", "<i>open</i>");
const $open = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#b/0"], "click", function() {
	$open($scope, !$scope.open);
	document.body.dataset.item = JSON.stringify($scope.input_item);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = /*@__PURE__*/ _const("input_item");
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%/&c";
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = /*@__PURE__*/ _load_ready("ready:__tests__/child.marko", "#childScope/3", /*@__PURE__*/ _load_setup("#text/2", "#childScope/3", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_item = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_item.mjs")));
const $item = /*@__PURE__*/ _const("item", ($scope) => $load_Child_tag_input_item($scope["#childScope/3"], $scope.item));
const $input_label = ($scope, input_label) => $item($scope, { label: input_label });
const $count = /*@__PURE__*/ _let("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
	document.title = JSON.stringify($scope.item);
}));
function $setup($scope) {
	$load_Child_setup($scope);
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
