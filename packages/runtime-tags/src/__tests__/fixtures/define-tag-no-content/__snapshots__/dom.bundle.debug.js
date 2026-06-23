// template.marko
const $Baz_content__walks = "b", $Baz_content__template = "<div>Baz Content</div>";
const $template = /* @__PURE__ */ ((_w0) => `<!><!><!>${_w0}<!>`)($Baz_content__template);
const $walks = /* @__PURE__ */ ((_w0) => `b%b%b/${_w0}&b`)($Baz_content__walks);
const $Baz_content2 = _content_resume("__tests__/template.marko_4_content", "<div>Baz Fallback</div>", "b");
const $Bar_content = _content_resume("__tests__/template.marko_2_content", "<div>Bar Fallback</div>", "b");
const $Foo_content = _content_resume("__tests__/template.marko_1_content", "<div>Foo Fallback</div>", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $Foo_content);
const $Foo = $dynamicTag;
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/1", $Bar_content);
const $Bar = $dynamicTag2;
function $setup($scope) {
	$Foo($scope, {});
	$Bar($scope, {});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
