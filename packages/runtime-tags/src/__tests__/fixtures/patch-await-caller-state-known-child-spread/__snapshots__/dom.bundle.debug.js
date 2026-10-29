// tags/brand.marko
const $template$2 = "<span> </span><b> </b>";
const $walks$2 = "D lD l";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/tags/brand.marko_0_$global_brand#5", ($scope) => _text($scope["#text/0"], $scope.$global.brand), "brand");
const $setup$2 = $setup__$global_brand;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$2 = ($scope, input) => $input_label($scope, input.label);
var brand_default = /*@__PURE__*/ _template("__tests__/tags/brand.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__setup = ($scope) => $setup$2($scope["#childScope/0"]);
const $await_content__x = /*@__PURE__*/ _const("x", ($scope) => {
	const $brand_input_spread = { label: $scope.x };
	$input_label($scope["#childScope/0"], $brand_input_spread.label);
});
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $p = _let("p/5", ($scope) => $input_promise$1($scope["#childScope/1"], $scope.p));
const $input_promise = $p;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
