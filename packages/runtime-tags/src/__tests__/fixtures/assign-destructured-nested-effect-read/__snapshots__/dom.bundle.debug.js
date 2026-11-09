// tags/counter.marko
const $template$1 = "<span> </span><button class=inc>inc</button>";
const $walks$1 = "D l b";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/counter.marko_0_input#3", ($scope) => {
	console.log(JSON.stringify($scope.input));
	_on($scope["#button/1"], "click", function() {
		$scope.input.obj.countChange($scope.input.obj.count + 1);
	});
});
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_text($scope["#text/0"], $scope.input.obj.label);
	$input__script($scope);
});
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div class=log> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	$input($scope["#childScope/0"], { obj: {
		label: "x",
		count: $scope.n,
		countChange: $obj($scope)
	} });
	_text($scope["#text/1"], $scope.n);
});
function $setup($scope) {
	$n($scope, 0);
}
const $obj = ($scope) => function(v) {
	$n($scope, v);
};
_resumed["__tests__/template.marko_0/obj"] = $obj;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
