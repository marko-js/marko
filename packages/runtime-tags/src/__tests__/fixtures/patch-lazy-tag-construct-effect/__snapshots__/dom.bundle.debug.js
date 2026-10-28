// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
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
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "ready:__tests__/child.marko");
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#0:4", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__input_attrs = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_attrs#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_attrs", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => {
	$if_content__input_attrs__script($scope);
	_attrs($scope, "#div/0", $scope._.input_attrs);
})));
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__input_label._($scope);
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $load_Child_tag_input_label($scope["#childScope/2"], $scope._.input_label))));
const $if = /*@__PURE__*/ _if("#main/0", "<div>x</div><!><!>", " b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_attrs($scope, input.attrs);
	$input_label($scope, input.label);
};
const $input_attrs = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_attrs", $if_content__input_attrs);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
