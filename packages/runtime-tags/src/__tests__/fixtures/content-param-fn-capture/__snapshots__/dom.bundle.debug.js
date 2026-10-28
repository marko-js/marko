// tags/reader.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $get__script = _script("__tests__/tags/reader.marko_0_get#3", ($scope) => _el_read($scope["#output/0"]).textContent = $scope.get());
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$2 = ($scope, input) => $get$1($scope, input.get);
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$2, " b", 0, $input$2);

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_x = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({ x: $scope.input_x })));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_content__OR__input_x);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_x($scope, input.x);
};
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $wrap_content__x = /*@__PURE__*/ _const("x", ($scope) => $get$1($scope["#childScope/0"], $get($scope)));
const $wrap_content__$params = ($scope, $params2) => $wrap_content__x($scope, $params2[0].x);
const $wrap_content = _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), 0, $wrap_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_v = ($scope, input_v) => $input_x($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
const $get = ($scope) => function() {
	return $scope.x;
};
_resumed["__tests__/template.marko_1/get"] = $get;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
