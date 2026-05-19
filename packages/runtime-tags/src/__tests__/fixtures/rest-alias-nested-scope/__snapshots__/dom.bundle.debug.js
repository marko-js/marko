// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_value_foo = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.foo));
const $if_content__setup = ($scope) => {
	$if_content__input_value_foo._($scope);
	$if_content__rest._($scope);
};
const $if_content__rest__script = _script("__tests__/template.marko_1_rest", ($scope) => _attrs_script($scope, "#span/1"));
const $if_content__rest = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => {
	_attrs_content($scope, "#span/1", $scope._.rest);
	$if_content__rest__script($scope);
});
const $if = /* @__PURE__ */ _if("#text/0", " -- <!><span></span>", "b%b b", $if_content__setup);
const $value = ($scope, value) => {
	(({ foo, ...rest }) => $rest($scope, rest))(value || {});
	$input_value_foo($scope, value?.foo);
	$if($scope, value ? 0 : 1);
};
const $input = ($scope, input) => $value($scope, input.value);
const $rest = /* @__PURE__ */ _const("rest", $if_content__rest);
const $input_value_foo = /* @__PURE__ */ _const("foo", $if_content__input_value_foo);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
