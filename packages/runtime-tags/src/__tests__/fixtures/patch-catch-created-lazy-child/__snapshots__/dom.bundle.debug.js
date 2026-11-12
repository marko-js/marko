// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_0_count#6/fill", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
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
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "ready:__tests__/child.marko");
const $try_content__input_error = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_error#0:4/subscribe", "input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"));
const $try_content__setup = $try_content__input_error;
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/5", ($scope) => $load_Child_tag_input_label($scope["#childScope/2"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
};
const $catch_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<b> </b><!><!>", "D l%/&", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
