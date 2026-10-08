// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
const $if_content__setup = ($scope) => _text($scope["#text/0"], throwIt());
const $catch_content = _content("__tests__/template.marko_2*content", "caught");
const $try_content__input_title = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_title#0:3/init", "input_title/5", ($scope) => _text($scope["#text/1"], $scope._.input_title), 0, "__tests__/template.marko_1_input_title#0:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_title($scope);
	$try_content__input_fail($scope);
	$setup$1($scope["#childScope/2"]);
	_text($scope["#text/0"], SITE);
};
const $try_content__if = /*@__PURE__*/ _if("#text/3", " ", " ", $if_content__setup);
const $try_content__input_fail = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_fail#0:4/init", "input_fail/6", ($scope) => $try_content__if($scope, $scope._.input_fail ? 0 : 1), 0, "__tests__/template.marko_1_input_fail#0:4/subscribe");
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks$1), $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_fail($scope, input.fail);
};
const $input_title__closure = /*@__PURE__*/ _closure($try_content__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
