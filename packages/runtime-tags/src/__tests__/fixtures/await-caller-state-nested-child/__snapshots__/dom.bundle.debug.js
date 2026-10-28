// tags/brand.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
function $setup$2($scope) {
	_text($scope["#text/0"], $scope.$global.brand);
}
var brand_default = /*@__PURE__*/ _template("__tests__/tags/brand.marko", $template$2, "D l", $setup$2);

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__setup = ($scope) => $setup$2($scope["#childScope/1"]);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<div><p> </p>${_w0}</div>`)($template$2), /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D l"), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $p = /*@__PURE__*/ _let("p/5", ($scope) => $input_promise$1($scope["#childScope/1"], $scope.p));
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
