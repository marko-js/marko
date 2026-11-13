// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading");
const $await_content__n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_n#2:1/subscribe", "n/2", ($scope) => _text($scope["#text/0"], $scope._._.n), ($scope) => $scope._._);
const $await_content__setup = $await_content__n;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $wrap_content__n__closure = /*@__PURE__*/ _closure($await_content__n);
const $wrap_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_2_n#1/fill", "n/1", $wrap_content__n__closure);
const $wrap_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $wrap_content__setup__script = _script("__tests__/template.marko_2", ($scope) => $wrap_content__n($scope, 5));
const $wrap_content__setup = ($scope) => {
	$wrap_content__try($scope);
	$wrap_content__setup__script($scope);
	$wrap_content__n($scope, 1);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $wrap_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrap_content($scope));
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
