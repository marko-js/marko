// tags/hello/index.marko
const $template$1 = "<header><!></header><main><!></main><footer><!></footer>";
const $walks$1 = " D%lD%l D%l";
const $setup$1 = () => {};
const $input_header_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $input_footer_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/4");
const $input_header_class = ($scope, input_header_class) => _attr_class($scope["#header/0"], input_header_class);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_header_content = $dynamicTag$1;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag2;
const $input_footer_class = ($scope, input_footer_class) => _attr_class($scope["#footer/3"], input_footer_class);
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_footer_content = $dynamicTag3;
const $input = ($scope, input) => {
	$input_header($scope, input.header);
	$input_content($scope, input.content);
	$input_footer($scope, input.footer);
};
const $input_header = ($scope, input_header) => {
	$input_header_class($scope, input_header?.class);
	$input_header_content($scope, input_header?.content);
};
const $input_footer = ($scope, input_footer) => {
	$input_footer_class($scope, input_footer?.class);
	$input_footer_content($scope, input_footer?.content);
};
var hello_default = /*@__PURE__*/ _template("__tests__/tags/hello/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const x = hello_default;
const $footer_content = _content_resume("__tests__/template.marko_3_content", "Footer content", "b");
const $header_content = _content_resume("__tests__/template.marko_2_content", "Header content", "b");
const $x_content = _content_resume("__tests__/template.marko_1_content", "Body content", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $x_content);
function $setup($scope) {
	$dynamicTag($scope, x, () => ({
		header: attrTag({
			class: "my-header",
			content: $header_content($scope)
		}),
		footer: attrTag({
			class: "my-footer",
			content: $footer_content($scope)
		})
	}));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
