// tags/child.marko
const $template$2 = "<p></p>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input_class__OR__rest__script = _script("__tests__/tags/child.marko_0_input_class_rest", ($scope) => _attrs_script($scope, "#p/0"));
const $input_class__OR__rest = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_content($scope, "#p/0", {
		class: $scope.input_class,
		...$scope.rest
	});
	$input_class__OR__rest__script($scope);
});
const $input_class = /*@__PURE__*/ _const("input_class", $input_class__OR__rest);
const $rest$1 = /*@__PURE__*/ _const("rest", $input_class__OR__rest);
const $input$1 = ($scope, input) => {
	(({ class: $class, ...rest }) => $rest$1($scope, rest))(input);
	$input_class($scope, input.class);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $_class = ($scope, _class) => $input_class($scope["#childScope/0"], _class);
const $rest = ($scope, rest) => $rest$1($scope["#childScope/0"], (({ class: $class, ...rest }) => rest)(rest));
const $input = ($scope, input) => {
	(({ class: $class2, ...rest }) => $rest($scope, rest))(input);
	$_class($scope, input.class);
};
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<div id=content-missing>${_w0}</div><div id=content-undefined>${_w1}</div><div id=content-set>${_w2}</div><div id=dynamic><!></div>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `D/${_w0}&lD/${_w1}&lD/${_w2}&lD%l`)($walks$1, $walks$1, $walks$1);
const Wrap = wrap_default;
const $Wrap_content = _content_resume("__tests__/template.marko_2_content", "Hello World", "b");
const $wrap_content = _content_resume("__tests__/template.marko_1_content", "Hello World", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", $Wrap_content);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$_class($scope["#childScope/0"], "foo");
	$rest($scope["#childScope/0"], {});
	$setup$1($scope["#childScope/1"]);
	$_class($scope["#childScope/1"], "foo");
	$rest($scope["#childScope/1"], { content: undefined });
	$setup$1($scope["#childScope/2"]);
	$_class($scope["#childScope/2"], "foo");
	$rest($scope["#childScope/2"], { content: $wrap_content($scope) });
	$dynamicTag($scope, Wrap, () => ({ class: "bar" }));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
