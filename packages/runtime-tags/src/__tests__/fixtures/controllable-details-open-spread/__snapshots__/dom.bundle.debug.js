// tags/my-details.marko
const $template$1 = "<details><summary>s</summary></details>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-details.marko_0_input", ($scope) => _attrs_script($scope, "#details/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs($scope, "#details/0", $scope.input);
	$input__script($scope);
});
var my_details_default = /* @__PURE__ */ _template("__tests__/tags/my-details.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&D l`)(" b");
const $open = /* @__PURE__ */ _let("open/2", ($scope) => {
	$input($scope["#childScope/0"], {
		open: $scope.open,
		openChange: $openChange($scope)
	});
	_text($scope["#text/1"], String($scope.open));
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$open($scope, false);
}
function $openChange($scope) {
	return (_new_open) => {
		$open($scope, _new_open);
	};
}
_resume("__tests__/template.marko_0/openChange", $openChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
