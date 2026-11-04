// template.marko
const $Child_content__walks = " b";
const $Child_content__template = "<div></div>";
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $Child_content__value = _fill_let_resume("__tests__/template.marko_2_value#4/fill", "value/4", ($scope) => $Child_content__value_b($scope, $scope.value?.b));
const $Child_content__value_b__script = _script("__tests__/template.marko_2_value_b#5", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.value_b);
const $Child_content__value_b = /*@__PURE__*/ _const("value_b", $Child_content__value_b__script);
const $Child_content__input_data = $Child_content__value;
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => $Child_content__input_data($scope, input.data);
const $if_content__count = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_count#0:6/setup", "#text/2", 0, ($scope) => $Child_content__input_data($scope["#childScope/0"], { b: $scope._.count }));
const $if_content__setup = $if_content__count;
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $Child_content__template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Child_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
