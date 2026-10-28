// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_a__OR__n = /*@__PURE__*/ _fill_if("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:4_n#3/init", 4, ($scope) => _text($scope["#text/1"], $scope._.input_a + $scope.n)), "#text/0", 0);
const $if_content__input_a__script = _script("__tests__/template.marko_1_input_a#0:4", ($scope) => {
	_el_read($scope["#div/2"]).textContent = String($scope._.input_a);
	_el_read($scope["#div/2"]).dataset.runs = String(+(_el_read($scope["#div/2"]).dataset.runs || 0) + 1);
});
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_a__OR__n($scope);
	$if_content__input_a__script($scope);
})));
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/3", $if_content__input_a__OR__n);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__n($scope, +$scope.n + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__setup__script($scope);
	$if_content__n($scope, 0);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button class=n>n</button><p class=j> </p><div class=e></div>", " bD l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
