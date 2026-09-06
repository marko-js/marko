// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $placeholder_content = _content_resume("__tests__/template.marko_4*content", "loading");
const $await_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => _text($scope["#text/0"], $scope._._._.input_value), ($scope) => $scope._._._, "__tests__/template.marko_3_input_value#4/pending");
const $await_content__setup = $await_content__input_value;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => $try_content__await_promise($scope, Promise.resolve($scope._._.input_value)), ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value, $await_content__input_value);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
