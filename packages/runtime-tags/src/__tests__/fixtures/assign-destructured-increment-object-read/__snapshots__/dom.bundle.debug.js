// tags/counter.marko
const $template$1 = "<button class=inc>inc</button>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/counter.marko_0_input#2", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log(JSON.stringify($scope.input));
	$scope.input.countChange(+$scope.input.count + 1);
}));
const $input = /*@__PURE__*/ _const("input", $input__script);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div class=log> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
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
