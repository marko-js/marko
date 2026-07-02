// tags/show-result/index.marko
const $template$1 = "<div class=result> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input = ($scope, input) => _text($scope["#text/0"], input.get());
var show_result_default = /* @__PURE__ */ _template("__tests__/tags/show-result/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button class=inc>inc</button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)("D l");
const $count = /* @__PURE__ */ _let("count/2", ($scope) => $input($scope["#childScope/1"], { get: function() {
	return $scope.count;
} }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
