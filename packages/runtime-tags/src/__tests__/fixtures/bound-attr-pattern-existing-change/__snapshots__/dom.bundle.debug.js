// tags/reveal/index.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var reveal_default = /* @__PURE__ */ _template("__tests__/tags/reveal/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `<button>inc <!></button>${_w0}${_w1}`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => ` Db%l/${_w0}&/${_w1}&`)("D l", "D l");
const $pattern3 = ($scope, $pattern) => $a($scope, $pattern.a);
const $a = ($scope, a) => $input_value($scope["#childScope/2"], a);
const $pattern4 = ($scope, $pattern2) => $b($scope, $pattern2.b);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/8", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/3"]);
	$pattern3($scope, {
		a: "A",
		aChange(v) {}
	});
	$pattern4($scope, {
		b: "B",
		bChange(v) {}
	});
	$n($scope, 1);
}
const $b = ($scope, b) => $input_value($scope["#childScope/3"], b);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
