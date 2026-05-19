// tags/child.marko
const $template$1 = "<div><!></div><div> </div>";
const $walks$1 = " D%lD l";
const $setup$1 = () => {};
const $rest__script = _script("__tests__/tags/child.marko_0_rest", ($scope) => _attrs_script($scope, "#div/0"));
const $rest = /* @__PURE__ */ _const("rest", ($scope) => {
	_attrs($scope, "#div/0", $scope.rest);
	$rest__script($scope);
});
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_content = ($scope, content) => $dynamicTag($scope, content);
const $input = ($scope, input) => {
	_text($scope["#text/2"], Object.keys(input));
	(({ content, ...rest }) => $rest($scope, rest))(input);
	$input_content($scope, input.content);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $child_content__value = /* @__PURE__ */ _closure_get("value", ($scope) => _text($scope["#text/0"], $scope._.value));
const $child_content__setup = $child_content__value;
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", " ", " b", $child_content__setup);
const $value = /* @__PURE__ */ _const("value");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { content: $child_content($scope) });
	$value($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
