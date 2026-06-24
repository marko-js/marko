// tags/child/index.marko
const $template$1 = "<div><!>:<!></div>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $first = ($scope, first) => _text($scope["#text/0"], first);
const $rest = ($scope, rest) => _text($scope["#text/1"], Object.keys(rest).join(","));
const $input = ($scope, input) => {
	(({ first, ...rest }) => $rest($scope, rest))(input);
	$first($scope, input.first);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>inc <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$first($scope["#childScope/2"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$rest($scope["#childScope/2"], {
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	$n($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
