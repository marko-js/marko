// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_value__OR__input_valueChange__script = _script("__tests__/tags/child.marko_0_value#2_$valueChange#3", ($scope) => {
	console.log("value", $scope.value);
	document.addEventListener("ping", () => {
		$scope.$valueChange($scope.value + 1);
	});
});
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(4, $input_value__OR__input_valueChange__script);
const $value = /*@__PURE__*/ _const("value", $input_value__OR__input_valueChange);
const $valueChange2 = /*@__PURE__*/ _const("$valueChange", $input_value__OR__input_valueChange);
const $input = ($scope, input) => {
	$value($scope, input.value);
	$valueChange2($scope, input.valueChange);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, $input);

// tags/counter.marko
const $template$1 = "";
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $count = /*@__PURE__*/ _let("count/1", ($scope) => $value($scope["#childScope/0"], $scope.count));
function $setup$1($scope) {
	$valueChange2($scope["#childScope/0"], $valueChange($scope));
	$count($scope, 0);
}
const $valueChange = ($scope) => (_new_count) => $count($scope, _new_count);
_resumed["__tests__/tags/counter.marko_0/valueChange"] = $valueChange;
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><button>hide</button>";
const $walks = "b%b b";
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
