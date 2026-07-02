// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
function $setup$1($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/0"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1);

// template.marko
const $template = "<!><!><hr><!><hr><!><!>";
const $walks = "b%c%c%c";
const $setHtml3_getter = _hoist_resume("__tests__/template.marko_0_setHtml3/hoist", "setHtml3", "BranchScopes:#ul/0", "BranchScopes:#text/2");
const $for_content4__setHtml = _var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */ _const("setHtml3", ($scope) => _assert_hoist($scope.setHtml3)));
const $for_content4__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content4__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $for_content3__for = /* @__PURE__ */ _for_to("#ul/0", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $for_content4__setup);
const $for_content3__setup = ($scope) => $for_content3__for($scope, [
	3,
	0,
	1
]);
const $setHtml2_getter = /* @__PURE__ */ _hoist("setHtml2", "BranchScopes:#text/1");
const $for_content2__setHtml = _var_resume("__tests__/template.marko_2_setHtml2/var", /* @__PURE__ */ _const("setHtml2", ($scope) => _assert_hoist($scope.setHtml2)));
const $for_content2__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content2__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $setHtml_getter = /* @__PURE__ */ _hoist("setHtml", "BranchScopes:#text/0");
const $for_content__setHtml = _var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
const $for_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content__setHtml);
	$setup$1($scope["#childScope/0"]);
};
const $for = /* @__PURE__ */ _for_to("#text/0", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $for_content__setup);
const $for2 = /* @__PURE__ */ _for_to("#text/1", $template$1, /* @__PURE__ */ ((_w0) => `0${_w0}&`)(" b"), $for_content2__setup);
const $to = /* @__PURE__ */ _let("to/3", ($scope) => $for2($scope, [
	$scope.to,
	0,
	1
]));
const $for3 = /* @__PURE__ */ _for_to("#text/2", "<ul></ul>", " b", $for_content3__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	$setHtml_getter($scope)()("First Only");
	$setHtml2_getter($scope)()("First Only");
	{
		let i = 0;
		for (const fn of $setHtml3_getter($scope)) {
			fn(`All (${i++})`);
		}
	}
});
function $setup($scope) {
	$for($scope, [
		5,
		0,
		1
	]);
	$to($scope, 3);
	$for3($scope, [
		3,
		0,
		1
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
