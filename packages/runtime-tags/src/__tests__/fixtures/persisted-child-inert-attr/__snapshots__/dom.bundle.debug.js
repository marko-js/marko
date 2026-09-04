// helper.ts
function stamp() {
	return "stamp";
}

// tags/dump/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input = ($scope, input) => _text($scope["#text/0"], JSON.stringify(input));
var dump_default = /*@__PURE__*/ _template("__tests__/tags/dump/index.marko", $template$1, "D l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input($scope["#childScope/0"], {
	value: $scope.count,
	stamp: stamp()
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
