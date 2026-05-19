// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => $scope.input.value().innerHTML = "mounted");
const $input = /* @__PURE__ */ _const("input", $input__script);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}<div></div>${_w1}`)("", "");
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}& b/${_w1}&`)("", "");
const $el_getter = _hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/1");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { value: $el_getter($scope) });
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input($scope["#childScope/2"], { value: $el_getter($scope) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
