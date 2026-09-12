// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// template.marko
const $template = "<button class=n> </button><main></main>";
const $walks = " D l b";
let $load_Child_setup = _resume("__tests__/template.marko_1_#text#0/init", /*@__PURE__*/ _load_ready("ready:__tests__/child.marko", "#childScope/1", /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__input_label__OR__n = /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "input_label", /*@__PURE__*/ _init_join("__tests__/template.marko_1_input_label#6/init", /*@__PURE__*/ _or(2, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], `${$scope._.input_label}${$scope._.n}`))), "#main/2", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/2", 0, $if_content__input_label__OR__n);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__n._($scope);
	$load_Child_setup($scope);
};
const $if_content__n = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_n#7/init", "#main/2", 0, $if_content__input_label__OR__n);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$if_content__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#main/2", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = _fill_const("__tests__/template.marko0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
