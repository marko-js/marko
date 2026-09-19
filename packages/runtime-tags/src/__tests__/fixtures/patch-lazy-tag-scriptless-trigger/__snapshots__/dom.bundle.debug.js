// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $load_Child_trigger = /*@__PURE__*/ _load_event_trigger("click", "body");
let $load_Child_setup = _resume("__tests__/template.marko_1_#text#0/init", /*@__PURE__*/ _load_ready("ready:__tests__/child.marko", "#childScope/1", /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.setup.mjs")))));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Child_trigger(() => import("./v:child.marko.input_label.mjs")));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$load_Child_setup($scope);
};
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// child.marko
const $template = "<p class=child> </p>";
const $walks = "D l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
