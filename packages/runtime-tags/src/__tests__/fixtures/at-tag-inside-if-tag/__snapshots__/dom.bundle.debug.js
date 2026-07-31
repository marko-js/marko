// tags/custom-tag/index.marko
const $template$1 = "<!><!><div> </div>";
const $walks$1 = "b%bD l";
const $setup$1 = () => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $content = $dynamicTag;
const $x$1 = ($scope, x) => _text($scope, "#text/1", x);
const $input$1 = ($scope, input) => $thing2($scope, input.thing);
const $thing2 = ($scope, $thing) => {
	$x$1($scope, $thing.x);
	$content($scope, $thing.content);
};
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = () => {};
const $thing_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "Goodbye");
const $thing_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "Hello");
const $x = /*@__PURE__*/ _const("x", ($scope) => {
	let $thing;
	if ($scope.x) {
		$thing = attrTag({
			x: 1,
			content: $thing_content($scope)
		});
	} else {
		$thing = attrTag({
			x: 2,
			content: $thing_content2($scope)
		});
	}
	$thing2($scope["#childScope/0"], $thing);
});
const $input = ($scope, input) => $x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
