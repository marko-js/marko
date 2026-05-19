// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_valueChange__script = _script("__tests__/tags/child.marko_0_input_valueChange", ($scope) => $scope.input_valueChange(1));
const $input_valueChange = /* @__PURE__ */ _const("input_valueChange", $input_valueChange__script);
const $input = ($scope, input) => $input_valueChange($scope, input.valueChange);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setter = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $input_valueChange($scope["#childScope/0"], $valueChange($scope)));
const $if_content__setup = ($scope) => {
	$if_content__setter._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $setter2 = /* @__PURE__ */ _const("setter");
const $if = /* @__PURE__ */ _if("#text/0", "", /* @__PURE__ */ ((_w0) => `/${_w0}&`)(""), $if_content__setup);
function $setup($scope) {
	0;
	$setter2($scope, $setter($scope));
	$if($scope, true ? 0 : 1);
}
function $valueChange($scope) {
	return function() {
		$scope._.setter();
	};
}
function $setter($scope) {
	return function() {
		1;
	};
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
_resume("__tests__/template.marko_0/setter", $setter);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
