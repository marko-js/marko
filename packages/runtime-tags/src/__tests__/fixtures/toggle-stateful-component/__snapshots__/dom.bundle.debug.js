// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $clickCount = /* @__PURE__ */ _let("clickCount/5", ($scope) => _text($scope["#text/1"], ((() => {
	if ($scope.clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
})(), $scope.clickCount)));
function $setup$1($scope) {
	$clickCount($scope, 0);
}
const $input_onCount__script = _script("__tests__/tags/counter.marko_0_input_onCount", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onCount($clickCount($scope, $scope.clickCount + 1));
}));
const $input_onCount = /* @__PURE__ */ _const("input_onCount", $input_onCount__script);
const $input = ($scope, input) => $input_onCount($scope, input.onCount);
var counter_default = /* @__PURE__ */ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<div></div>";
const $walks = " b";
const $if_content__onCount = /* @__PURE__ */ _if_closure("#div/0", 0, ($scope) => $input_onCount($scope["#childScope/0"], $scope._.onCount));
const $if_content__setup = ($scope) => {
	$if_content__onCount._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#div/0", /* @__PURE__ */ ((_w0) => `<div>${_w0}</div>`)($template$1), /* @__PURE__ */ ((_w0) => `D/${_w0}&l`)($walks$1), $if_content__setup);
const $show = /* @__PURE__ */ _let("show/1", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $onCount2 = /* @__PURE__ */ _const("onCount");
function $setup($scope) {
	$show($scope, true);
	$onCount2($scope, $onCount($scope));
}
function $onCount($scope) {
	return function(count) {
		$show($scope, count < 1);
	};
}
_resume("__tests__/template.marko_0/onCount", $onCount);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
