// template.marko
const $template = "<pre id=root></pre><pre id=outer></pre><pre id=inner></pre><!><!>";
const $walks = " b b b%c";
const $el_getter = _hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/0", "BranchScopes:#text/0", "BranchScopes:#text/3");
const $for_content__$el_getter = _hoist_resume("__tests__/template.marko_1_#div/hoist", "#div/0", "BranchScopes:#text/0");
const $for_content2__$el_getter = _hoist_resume("__tests__/template.marko_2_#div/hoist", "#div/0");
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _el_read($scope._._["#pre/2"]).innerHTML += `${[...$for_content2__$el_getter($scope)].length}; ${_el_read($scope["#div/0"]).className}\n\t`);
const $for_content2__setup = ($scope) => {
	_attr_class($scope["#div/0"], `${$scope._["#LoopKey"]}, ${$scope["#LoopKey"]}`);
	$for_content2__setup__script($scope);
};
const $for_content__for = /* @__PURE__ */ _for_to("#text/0", "<div></div>", " b", $for_content2__setup);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope._["#pre/1"]).innerHTML += `${[...$for_content__$el_getter($scope)].length}; ${$for_content__$el_getter($scope)().className}\n\t`);
const $for_content__setup = ($scope) => {
	$for_content__for($scope, [
		2,
		0,
		1
	]);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to("#text/3", "<!><!><!>", "b%c", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _el_read($scope["#pre/0"]).innerHTML += `${[...$el_getter($scope)].length}; ${$el_getter($scope)().className}\n\t`);
function $setup($scope) {
	$for($scope, [
		2,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
