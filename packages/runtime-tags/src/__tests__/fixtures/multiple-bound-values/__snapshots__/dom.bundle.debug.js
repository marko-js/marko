// tags/2counters.marko
const $template$1 = "<button> </button><button> </button>";
const $walks$1 = " D l D l";
const $count$1 = /* @__PURE__ */ _let_change("count1/12", ($scope) => _text($scope["#text/1"], $scope.count1));
const $input_count1__OR__input_count1Change = /* @__PURE__ */ _or(8, ($scope) => $count$1($scope, $scope.input_count1, $scope.input_count1Change));
const $input_count = /* @__PURE__ */ _const("input_count1", $input_count1__OR__input_count1Change);
const $input_count1Change = /* @__PURE__ */ _const("input_count1Change", $input_count1__OR__input_count1Change);
const $count2$1 = /* @__PURE__ */ _let_change("count2/13", ($scope) => _text($scope["#text/3"], $scope.count2));
const $input_count2__OR__input_count2Change = /* @__PURE__ */ _or(11, ($scope) => $count2$1($scope, $scope.input_count2, $scope.input_count2Change));
const $input_count2 = /* @__PURE__ */ _const("input_count2", $input_count2__OR__input_count2Change);
const $input_count2Change = /* @__PURE__ */ _const("input_count2Change", $input_count2__OR__input_count2Change);
const $setup__script = _script("__tests__/tags/2counters.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count$1($scope, $scope.count1 + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$count2$1($scope, $scope.count2 + 1);
	});
});
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_count($scope, input.count1);
	$input_count1Change($scope, input.count1Change);
	$input_count2($scope, input.count2);
	$input_count2Change($scope, input.count2Change);
};
var _2counters_default = /* @__PURE__ */ _template("__tests__/tags/2counters.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<div><!> <!></div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&D%c%l`)($walks$1);
const $count = /* @__PURE__ */ _let("count1/3", ($scope) => {
	$input_count($scope["#childScope/0"], $scope.count1);
	_text($scope["#text/1"], $scope.count1);
});
const $count2 = /* @__PURE__ */ _let("count2/4", ($scope) => {
	$input_count2($scope["#childScope/0"], $scope.count2);
	_text($scope["#text/2"], $scope.count2);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_count1Change($scope["#childScope/0"], $count1Change($scope));
	$input_count2Change($scope["#childScope/0"], $count2Change($scope));
	$count($scope, 0);
	$count2($scope, 0);
}
function $count2Change($scope) {
	return (_new_count2) => {
		$count2($scope, _new_count2);
	};
}
function $count1Change($scope) {
	return (_new_count1) => {
		$count($scope, _new_count1);
	};
}
_resume("__tests__/template.marko_0/count2Change", $count2Change);
_resume("__tests__/template.marko_0/count1Change", $count1Change);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
