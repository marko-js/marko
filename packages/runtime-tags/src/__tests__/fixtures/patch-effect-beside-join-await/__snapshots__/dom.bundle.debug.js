// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__input_a__OR__n = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:3_n#3/init", 4, ($scope) => _text($scope["#text/1"], $scope._.input_a + $scope.n)), "input_a/4", 0);
const $await_content__input_a__script = _script("__tests__/template.marko_1_input_a#0:3", ($scope) => {
	_el_read($scope["#div/2"]).textContent = String($scope._.input_a);
	_el_read($scope["#div/2"]).dataset.runs = String(+(_el_read($scope["#div/2"]).dataset.runs || 0) + 1);
});
const $await_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:3/init", _closure_resume("__tests__/template.marko_1_input_a#0:3/subscribe", /*@__PURE__*/ _closure_get("input_a/4", ($scope) => {
	$await_content__input_a__OR__n($scope);
	$await_content__input_a__script($scope);
})));
const $await_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/3", $await_content__input_a__OR__n);
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__n($scope, +$scope.n + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__input_a($scope);
	$await_content__setup__script($scope);
	$await_content__n($scope, 0);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button class=n>n</button><p class=j> </p><div class=e></div>", " bD l ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, Promise.resolve(1));
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($await_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
