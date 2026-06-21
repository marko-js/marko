// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_value = /* @__PURE__ */ _const("input_value", ($scope) => _return($scope, $_return($scope)));
const $input = ($scope, input) => $input_value($scope, input.value);
function $_return($scope) {
	return () => $scope.input_value;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1, $input);

// template.marko
const $template = "<pre id=root></pre><pre id=outer></pre><pre id=inner></pre><!><!>";
const $walks = " b b b%c";
const $ref_getter = _hoist_resume("__tests__/template.marko_0_ref/hoist", "ref", "BranchScopes:#text/0", "BranchScopes:#text/3");
const $for_content__ref_getter = _hoist_resume("__tests__/template.marko_1_ref/hoist", "ref", "BranchScopes:#text/0");
const $for_content2__ref_getter = _hoist_resume("__tests__/template.marko_2_ref/hoist", "ref");
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _el_read($scope._._["#pre/2"]).innerHTML += `${[...$for_content2__ref_getter($scope)].length}; ${$for_content2__ref_getter($scope)()}\n\t`);
const $for_content2__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content2__ref);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], `${$scope._["#LoopKey"]},${$scope["#LoopKey"]}`);
	$for_content2__setup__script($scope);
};
const $for_content2__ref = /* @__PURE__ */ _const("ref", ($scope) => _assert_hoist($scope.ref));
const $for_content__for = /* @__PURE__ */ _for_to("#text/0", "", /* @__PURE__ */ ((_w0) => `0${_w0}&`)(""), $for_content2__setup);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope._["#pre/1"]).innerHTML += `${[...$for_content__ref_getter($scope)].length}; ${$for_content__ref_getter($scope)()}\n\t`);
const $for_content__setup = ($scope) => {
	$for_content__for($scope, [
		2,
		0,
		1
	]);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to("#text/3", "<!><!><!>", "b%c", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _el_read($scope["#pre/0"]).innerHTML += `${[...$ref_getter($scope)].length}; ${$ref_getter($scope)()}\n\t`);
function $setup($scope) {
	$for($scope, [
		2,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
