// tags/picker.marko
const $template$2 = "<button class=pick>pick</button>";
const $walks$2 = " b";
const $setup__script = _script("__tests__/tags/picker.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onPick();
}));
const $setup$2 = $setup__script;
const $input$1 = ($scope, input) => $input_onPick($scope, input.onPick);
const $input_onPick = /*@__PURE__*/ _const("input_onPick");
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", $template$2, " b", $setup$2, $input$1);

// tags/counter.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $input__script = _script("__tests__/tags/counter.marko_0_input#2", ($scope) => console.log(JSON.stringify($scope.input)));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input_countChange($scope, $scope.input.countChange);
	$input__script($scope);
});
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
const $input_countChange = /*@__PURE__*/ _const("$countChange", ($scope) => $input_onPick($scope["#childScope/0"], $onPick($scope)));
const $onPick = ($scope) => function() {
	$scope.$countChange(5);
};
_resumed["__tests__/tags/counter.marko_0/onPick"] = $onPick;
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input);

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
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
}
const $countChange = ($scope) => (_new_n) => $n($scope, _new_n);
_resumed["__tests__/template.marko_0/countChange"] = $countChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
