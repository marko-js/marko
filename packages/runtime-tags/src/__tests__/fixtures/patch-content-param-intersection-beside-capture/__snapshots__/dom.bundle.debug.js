// tags/reader.marko
const $template$2 = "<output></output>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $get__script = _script_patch("__tests__/tags/reader.marko_0_get#3 get", ($scope) => _el_read($scope["#output/0"]).textContent = $scope.get());
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$2 = ($scope, input) => $get$1($scope, input.get);
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$2, " b", 0, $input$2);

// tags/pass-on.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_obj_x = /*@__PURE__*/ _or_patch("__tests__/tags/pass-on.marko_0_input_content#3_input_obj_x#5/setup", 6, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => [$scope.input_obj_x]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_obj_x);
const $input_obj_x = /*@__PURE__*/ _const("input_obj_x", $input_content__OR__input_obj_x);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_obj$1($scope, input.obj);
};
const $input_obj$1 = ($scope, input_obj) => $input_obj_x($scope, input_obj?.x);
var pass_on_default = /*@__PURE__*/ _template("__tests__/tags/pass-on.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $passon_content__input_a__OR__x = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_a#0:4_x#3/setup", 4, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.x));
const $passon_content__input_a = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_a#0:4/subscribe", "input_a/5", $passon_content__input_a__OR__x, 0, "__tests__/template.marko_0_input_a#4/subscribers", 0);
const $passon_content__setup = $passon_content__input_a;
const $passon_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	$get$1($scope["#childScope/1"], $get($scope));
	$passon_content__input_a__OR__x($scope);
});
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)(" b"), $passon_content__setup, $passon_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $passon_content($scope));
}
const $input_obj = ($scope, input_obj) => $input_obj$1($scope["#childScope/0"], input_obj);
const $input = ($scope, input) => {
	$input_obj($scope, input.obj);
	$input_a($scope, input.a);
};
const $input_a__closure = /*@__PURE__*/ _closure($passon_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $get = ($scope) => function() {
	return $scope.x;
};
_bind_resume("__tests__/template.marko_1/get x", $get);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
