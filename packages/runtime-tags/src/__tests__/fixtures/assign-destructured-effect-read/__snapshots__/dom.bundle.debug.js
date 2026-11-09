// tags/counter.marko
const $template$1 = "<button class=inc>inc</button><button class=reset>reset</button>";
const $walks$1 = " b b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/counter.marko_0_input#3", ($scope) => {
	console.log(JSON.stringify($scope.input));
	_on($scope["#button/0"], "click", function() {
		$scope.input.countChange($scope.input.count + 1);
	});
});
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input_countChange($scope, $scope.input.countChange);
	$input__script($scope);
});
const $input_countChange__script = _script("__tests__/tags/counter.marko_0_$countChange#4", ($scope) => _on($scope["#button/1"], "click", function() {
	$scope.$countChange(0);
}));
const $input_countChange = /*@__PURE__*/ _const("$countChange", $input_countChange__script);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div class=log> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$input($scope["#childScope/0"], {
		count: $scope.n,
		countChange: $countChange($scope)
	});
	_text($scope["#text/1"], $scope.n);
});
function $setup($scope) {
	$n($scope, 0);
}
const $countChange = ($scope) => (_new_n) => $n($scope, _new_n);
_resumed["__tests__/template.marko_0/countChange"] = $countChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
