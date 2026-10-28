// child.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $for_content__input_label = /*@__PURE__*/ _init_resume("__tests__/child.marko_1_input_label#0:4/init", /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/0"], $scope._.input_label)));
const $for_content__setup = ($scope) => {
	$for_content__input_label._($scope);
	$for_content__count._($scope);
};
const $for_content__count__OR__i = /*@__PURE__*/ _or_resume("__tests__/child.marko_1_count#0:5_i#3/init", 4, ($scope) => _text($scope["#text/1"], $scope._.count + $scope.i));
const $for_content__count = /*@__PURE__*/ _for_closure("#text/1", $for_content__count__OR__i);
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__count__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko_fill0", "count/5", $for_content__count);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<span><!>:<!></span>", "D%c%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
	$for($scope, [[1, 2]]);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label = /*@__PURE__*/ _const("input_label", $for_content__input_label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=n> </button><main></main><p> </p>";
const $walks = " D l bD l";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "ready:__tests__/child.marko");
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#main/2", 0, ($scope) => $load_Child_tag_input_label($scope["#childScope/1"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#main/2", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$if_content__input_label($scope);
	_text($scope["#text/3"], $scope.input_label);
}, $if_content__input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
