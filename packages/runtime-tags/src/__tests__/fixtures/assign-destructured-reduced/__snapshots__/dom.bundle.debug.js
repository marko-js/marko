// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => {
	{
		$scope.input;
		const updated = _call($scope.input.valueChange, 2);
		if (updated !== 2) {
			throw new Error(`Expected value to be 2`);
		}
		console.log(updated, $scope.input.value);
	}
});
const $input = /* @__PURE__ */ _const("input", $input__script);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1, $input);

// template.marko
const $template = "";
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)("");
const $count = /* @__PURE__ */ _let("count/1", ($scope) => $input($scope["#childScope/0"], {
	value: $scope.count,
	valueChange: $valueChange($scope)
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
