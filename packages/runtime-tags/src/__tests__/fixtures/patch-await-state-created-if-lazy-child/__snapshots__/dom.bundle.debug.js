// lazy.marko
const $template = "<button class=child><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/lazy.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/lazy.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var lazy_default = /*@__PURE__*/ _template("__tests__/lazy.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:lazy.marko.input_label.mjs"), "ready:__tests__/lazy.marko");
const $await_content__input_label__OR__x = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_label#0:5_x#3/init", 4, ($scope) => $load_Lazy_tag_input_label($scope["#childScope/1"], $scope._._.input_label + $scope.x)), "input_label/7", 0);
const $await_content__input_label = _closure_resume("__tests__/template.marko_2_input_label#0:5/subscribe", /*@__PURE__*/ _closure_get("input_label/7", $await_content__input_label__OR__x, ($scope) => $scope._._));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $await_content__x__script = _script("__tests__/template.marko_2_x#3", ($scope) => console.log("await", $scope.x));
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$await_content__input_label__OR__x($scope);
	$await_content__x__script($scope);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%/&", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__await_promise($scope, Promise.resolve($scope._.n))));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$await_content($scope);
};
const $n = _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:lazy.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
