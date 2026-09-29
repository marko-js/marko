// template.marko
const $Card_content__walks = "D lD l";
const $Card_content__template = "<h1> </h1><p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button></button>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Card_content__walks);
const $Card_content__title = ($scope, title) => _text($scope["#text/0"], title);
const $Card_content__input_body = ($scope, input_body) => _text($scope["#text/1"], input_body);
const $Card_content__$params = ($scope, $params2) => $Card_content__input($scope, $params2[0]);
const $Card_content__input = ($scope, input) => {
	$Card_content__input_body($scope, input.body);
	$Card_content__title($scope, input.title);
};
const $t = /*@__PURE__*/ _let("t/2", ($scope) => $Card_content__title($scope["#childScope/0"], $scope.t));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$t($scope, $scope.t + "b");
}));
function $setup($scope) {
	$Card_content__input_body($scope["#childScope/0"], "static");
	$t($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
