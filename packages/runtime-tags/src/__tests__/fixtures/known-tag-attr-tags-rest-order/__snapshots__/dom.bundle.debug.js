// tags/child/index.marko
const $template$1 = "<div><!>:<!></div>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $first = ($scope, first) => _text($scope["#text/0"], first);
const $rest = ($scope, rest) => _text($scope["#text/1"], Object.keys(rest).join(","));
const $input$1 = ($scope, input) => {
	(({ first, ...rest }) => $rest($scope, rest))(input);
	$first($scope, input.first);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button>inc <!></button>${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` Db%l/${_w0}&/${_w1}&`)($walks$1, $walks$1);
const $input__OR__n = /*@__PURE__*/ _or(7, ($scope) => {
	const $child_input_spread = {
		first: $scope.n,
		...$scope.input,
		s: $scope.n,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	};
	$first($scope["#childScope/3"], $child_input_spread.first);
	$rest($scope["#childScope/3"], (({ first, ...rest }) => rest)($child_input_spread));
});
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	let $cond;
	if ($scope.n) {
		$cond = attrTag({ z: 2 });
	}
	$first($scope["#childScope/2"], $scope.n);
	$rest($scope["#childScope/2"], {
		s: $scope.n,
		cond: $cond,
		row: attrTag({ x: 1 }),
		other: attrTag({ y: 2 })
	});
	$input__OR__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _const("input", $input__OR__n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
