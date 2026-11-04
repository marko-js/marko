// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = ($_) => {};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_value = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_value#0:5/setup", "#text/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_value));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
	$input_label($scope, input.label);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
