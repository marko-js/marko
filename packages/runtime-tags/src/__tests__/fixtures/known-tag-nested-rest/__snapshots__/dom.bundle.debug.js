// tags/leaf.marko
const $template$2 = "<div>val <!></div>";
const $walks$2 = "Db%l";
const $setup$2 = () => {};
const $input_data_val = ($scope, input_data_val) => _text($scope["#text/0"], input_data_val);
const $input$1 = ($scope, input) => $input_data($scope, input.data);
const $input_data = ($scope, input_data) => $input_data_val($scope, input_data?.val);
var leaf_default = /* @__PURE__ */ _template("__tests__/tags/leaf.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/mid.marko
const $template$1 = /* @__PURE__ */ ((_w0) => `<p><!> <!></p>${_w0}`)($template$2);
const $walks$1 = /* @__PURE__ */ ((_w0) => `D%c%l/${_w0}&`)($walks$2);
const $first = ($scope, first) => _text($scope["#text/0"], first);
const $keep = ($scope, keep) => _text($scope["#text/1"], keep);
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/2"]);
}
const $rest = ($scope, rest) => $input_data($scope["#childScope/2"], rest);
const $input = ($scope, input) => {
	$first($scope, input.first);
	$group2($scope, input.group);
};
const $group2 = ($scope, $group) => {
	(({ keep, ...rest }) => $rest($scope, rest))($group);
	$keep($scope, $group.keep);
};
var mid_default = /* @__PURE__ */ _template("__tests__/tags/mid.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>inc <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /* @__PURE__ */ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$group2($scope["#childScope/2"], {
		keep: "k",
		val: $scope.n
	});
	$n__script($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$first($scope["#childScope/2"], "f");
	$n($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
