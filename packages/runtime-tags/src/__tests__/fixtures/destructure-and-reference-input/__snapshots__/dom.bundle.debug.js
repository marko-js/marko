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
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "1", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { content: $child_content($scope) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
