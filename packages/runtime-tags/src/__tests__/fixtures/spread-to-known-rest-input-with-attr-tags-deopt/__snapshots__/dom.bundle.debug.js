// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content__item__script = _script("__tests__/tags/child.marko_1_item", ($scope) => _attrs_script($scope, "#span/0"));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_attrs($scope, "#span/0", $scope.item);
	$for_content__item__script($scope);
});
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__desc = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	(({ desc, ...item }) => $for_content__item($scope, item))($temp);
	$for_content__desc($scope, $temp.desc);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<span><!></span>", " D%l", 0, $for_content__$params);
const $foo = ($scope, foo) => $for($scope, [foo]);
const $input$2 = ($scope, input) => $foo($scope, input.foo);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", $setup$2, $input$2);

// tags/wrap.marko
const $template$1 = " <!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
_resume_dynamic_tag();
const $_classspandiv_content__input_foo = /*@__PURE__*/ _closure_get("input_foo", ($scope) => $foo($scope["#childScope/0"], $scope._.input_foo));
const $_classspandiv_content__setup = ($scope) => {
	$_classspandiv_content__input_foo($scope);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
};
const $_classspandiv_content = _content_resume("__tests__/tags/wrap.marko_1_content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $_classspandiv_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $_classspandiv_content);
const $input_class__OR__rest = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope._class ? "span" : "div", () => ({
	...$scope.rest,
	class: $scope._class
})));
const $_class = /*@__PURE__*/ _const("_class", $input_class__OR__rest);
const $rest = /*@__PURE__*/ _const("rest", $input_class__OR__rest);
const $input$1 = ($scope, input) => {
	(({ class: $class, foo, ...rest }) => $rest($scope, rest))(input);
	$input_foo($scope, input.foo);
	$_class($scope, input.class);
};
const $input_foo__closure = /*@__PURE__*/ _closure($_classspandiv_content__input_foo);
const $input_foo = /*@__PURE__*/ _const("input_foo", $input_foo__closure);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)("b%c");
const $desc_content2 = _content_resume("__tests__/template.marko_2_content", "Two", "b");
const $desc_content = _content_resume("__tests__/template.marko_1_content", "One", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_foo($scope["#childScope/0"], attrTags(attrTag({
		value: 1,
		desc: attrTag({ content: $desc_content($scope) })
	}), {
		value: 1,
		desc: attrTag({ content: $desc_content2($scope) })
	}));
}
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	const $wrap_input_spread = {
		"data-one": 2,
		"data-foo": 1,
		...$scope.input
	};
	$_class($scope["#childScope/0"], $wrap_input_spread.class);
	$rest($scope["#childScope/0"], (({ class: $class, foo, ...rest }) => rest)($wrap_input_spread));
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
