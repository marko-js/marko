// card.marko
const $template = "<div><!> <!></div>";
const $walks = " D%c%l";
const $c = /*@__PURE__*/ _fill_let("__tests__/card.marko_fill0", "c/7", ($scope) => _text($scope["#text/2"], $scope.c));
const $setup__script = _script("__tests__/card.marko_0", ($scope) => _on($scope["#div/0"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$c($scope, 0);
}
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/1"], input_user_name);
const $input = ($scope, input) => $input_user($scope, input.user);
const $input_user = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%/&b%c";
let $load_Card_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:card.marko.setup.mjs"));
let $load_Card_tag_input_user = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:card.marko.input_user.mjs"), "ready:__tests__/card.marko");
const $if_content__input_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_user2#0:9/init", /*@__PURE__*/ _fill_signal("input_user2 __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/4", 0, ($scope) => $load_Card_tag_input_user($scope["#childScope/1"], $scope._.input_user2))));
const $if_content__setup = ($scope) => {
	$if_content__input_user._($scope);
	$load_Card_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
};
const $n = /*@__PURE__*/ _let("n/10", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$load_Card_setup($scope, $scope["#childScope/3"], $scope["#text/2"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_user = ($scope, input_user) => $load_Card_tag_input_user($scope["#childScope/3"], input_user);
const $if = /*@__PURE__*/ _if("#text/4", "<!><!><!>", "b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_user($scope, input.user);
	$input_show($scope, input.show);
	$input_user2($scope, input.user2);
};
const $input_user2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_user2", $if_content__input_user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// v:card.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
