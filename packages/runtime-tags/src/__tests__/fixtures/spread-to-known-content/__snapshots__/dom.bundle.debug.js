// tags/child.marko
const $template$2 = "<p><!></p>";
const $walks$2 = " D%l";
const $setup$2 = () => {};
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/1");
const $input_class = ($scope, input_class) => _attr_class($scope["#p/0"], input_class);
const $dynamicTag$1 = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_content($scope, input.content);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = $template$2;
const $walks$1 = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$2);
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $_class = ($scope, _class) => $input_class($scope["#childScope/0"], _class);
const $rest_content = ($scope, rest_content) => $input_content($scope["#childScope/0"], rest_content);
const $input = ($scope, input) => {
	(({ class: $class, ...rest }) => $rest($scope, rest))(input);
	$_class($scope, input.class);
};
const $rest = ($scope, rest) => $rest_content($scope, rest.content);
var wrap_default = /* @__PURE__ */ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1, _w2) => `<div id=content-missing>${_w0}</div><div id=content-undefined>${_w1}</div><div id=content-set>${_w2}</div><div id=dynamic><!></div>`)($template$1, $template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1, _w2) => `D/${_w0}&lD/${_w1}&lD/${_w2}&lD%l`)($walks$1, $walks$1, $walks$1);
const Wrap = wrap_default;
const $Wrap_content = _content_resume("__tests__/template.marko_2_content", "Hello World", "b");
const $wrap_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "Hello World", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/3", $Wrap_content);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$_class($scope["#childScope/0"], "foo");
	$rest_content($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$_class($scope["#childScope/1"], "foo");
	$rest_content($scope["#childScope/1"], undefined);
	$setup$1($scope["#childScope/2"]);
	$rest_content($scope["#childScope/2"], $wrap_content($scope));
	$_class($scope["#childScope/2"], "foo");
	$dynamicTag($scope, Wrap, () => ({ class: "bar" }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
