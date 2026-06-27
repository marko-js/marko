// tags/sections.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $if_content__content = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $for_content__if = /* @__PURE__ */ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $for_content__content = /* @__PURE__ */ _const("content", ($scope) => {
	$for_content__if($scope, $scope.content ? 0 : 1);
	$if_content__content($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__content($scope, ($params2?.[0]).content);
const $for = /* @__PURE__ */ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_section = ($scope, input_section) => $for($scope, [input_section]);
const $input = ($scope, input) => $input_section($scope, input.section);
var sections_default = /* @__PURE__ */ _template("__tests__/tags/sections.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c");
const $section_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $section_content__setup = $section_content__count;
const $section_content = _content_resume("__tests__/template.marko_1_content", " ", " b", $section_content__setup);
const $count__closure = /* @__PURE__ */ _closure($section_content__count);
const $count = /* @__PURE__ */ _let("count/1", ($scope) => {
	$input_section($scope["#childScope/0"], attrTag({
		onClick: $onClick($scope),
		content: $section_content($scope)
	}));
	$count__closure($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
function $onClick($scope) {
	return function() {
		$count($scope, $scope.count + 1);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
