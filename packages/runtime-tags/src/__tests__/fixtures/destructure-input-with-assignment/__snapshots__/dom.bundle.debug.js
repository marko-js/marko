// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $valueChange2__script = _script("__tests__/tags/child.marko_0_$valueChange", ($scope) => $scope.$valueChange(2));
const $valueChange2 = /* @__PURE__ */ _const("$valueChange", $valueChange2__script);
const $rest__script = _script("__tests__/tags/child.marko_0_rest", ($scope) => _attrs_script($scope, "#div/0"));
const $rest = /* @__PURE__ */ _const("rest", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.rest);
	$rest__script($scope);
});
const $input = ($scope, input) => {
	(({ value, valueChange, ...rest }) => $rest($scope, rest))(input);
	$valueChange2($scope, input.valueChange);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b");
const $child_content__value = /* @__PURE__ */ _closure_get("value", ($scope) => _text($scope["#text/0"], $scope._.value));
const $child_content__setup = $child_content__value;
const $child_content = _content_resume("__tests__/template.marko_1_content", " ", " b", $child_content__setup);
const $value__closure = /* @__PURE__ */ _closure($child_content__value);
const $value = /* @__PURE__ */ _let("value/1", $value__closure);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$valueChange2($scope["#childScope/0"], $valueChange($scope));
	$rest($scope["#childScope/0"], { content: $child_content($scope) });
	$value($scope, 1);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
