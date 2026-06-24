// tags/sections.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $for_content__content = /*@__PURE__*/ _const("content", ($scope) => {
	$for_content__if($scope, $scope.content ? 0 : 1);
	$if_content__content($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__content($scope, $temp.content);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_section = ($scope, input_section) => $for($scope, [input_section]);
const $input = ($scope, input) => $input_section($scope, input.section);
var sections_default = /*@__PURE__*/ _template("__tests__/tags/sections.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $section_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<div>that never changes</div>", "b");
const $section_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<div>static content</div>", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_section($scope["#childScope/0"], attrTags(attrTag({ content: $section_content($scope) }), { content: $section_content2($scope) }));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
