// tags/child.marko
const $template$1 = "<div> </div><button class=log>log</button>";
const $walks$1 = "D l b";
const $input2 = ($scope) => _text($scope["#text/0"], JSON.stringify($scope.input));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.input);
}));
const $setup$1 = $setup__script$1;
const $input = /*@__PURE__*/ _const("input", ($scope) => $input2($scope, $scope.input));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=change>change</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $a = /*@__PURE__*/ _let("a/2", ($scope) => $input($scope["#childScope/1"], { a: $scope.a }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, "bye");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$a($scope, "hello");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
