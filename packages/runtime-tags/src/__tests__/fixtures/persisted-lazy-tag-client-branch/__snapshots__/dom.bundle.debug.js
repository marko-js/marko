// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=toggle>toggle</button><main></main>";
const $walks = " b b";
let $load_Child_setup = /*@__PURE__*/ _load_ready("ready:__tests__/child.marko", "#childScope/1", /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs")));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content2__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_label", /*@__PURE__*/ _closure_get("input_label", ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._._.input_label), ($scope) => $scope._._), 0);
const $if_content2__setup = ($scope) => {
	$if_content2__input_label($scope);
	$load_Child_setup($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%/&", $if_content2__setup);
const $if_content__input_show = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_show", /*@__PURE__*/ _if_closure("#main/1", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1)));
const $if_content__setup = $if_content__input_show;
const $if = /*@__PURE__*/ _if("#main/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $if_content__input_show);
const $input_label__closure = /*@__PURE__*/ _closure($if_content2__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
