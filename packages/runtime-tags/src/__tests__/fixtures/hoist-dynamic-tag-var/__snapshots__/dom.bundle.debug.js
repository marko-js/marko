// tags/child.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
function $setup$2($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/0"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2);

// tags/thing.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_value__script = _script("__tests__/tags/thing.marko_0_input_value", ($scope) => $scope.input_value);
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__script);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var thing_default = /* @__PURE__ */ _template("__tests__/tags/thing.marko", "", "", $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!><!>${_w0}<!><!><!><!>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `b%b/${_w0}&%b%b%c`)("");
const $if_content5__setup__script = _script("__tests__/template.marko_5", ($scope) => $setHtml3_getter($scope._)()("Hello world"));
const $if_content5__setup = $if_content5__setup__script;
const $setHtml3_getter = _hoist("setHtml3", "BranchScopes:#text/3");
const $if_content4__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, () => $if_content4__setHtml);
const $if_content4__setHtml = _var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */ _const("setHtml3", ($scope) => _assert_hoist($scope.setHtml3)));
const $if_content4__setup = ($scope) => $if_content4__dynamicTag($scope, 1 && child_default);
const $setHtml2_getter = _hoist("setHtml2", "BranchScopes:#text/2");
const $if_content3__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, () => $if_content3__setHtml);
const $if_content3__setHtml = _var_resume("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */ _const("setHtml2", ($scope) => _assert_hoist($scope.setHtml2)));
const $if_content3__setup = ($scope) => $if_content3__dynamicTag($scope, 1 && child_default);
const $setHtml_getter = _hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "BranchScopes:#text/0", "BranchScopes:#text/0");
const $if_content2__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, () => $if_content2__setHtml);
const $if_content2__setHtml = _var_resume("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
const $if_content2__setup = ($scope) => $if_content2__dynamicTag($scope, 1 && child_default);
const $if_content__if = /* @__PURE__ */ _if("#text/0", "<!><!><!>", "b1c", $if_content2__setup);
const $if_content__input_show = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1));
const $if_content__setup = $if_content__input_show;
const $if = /* @__PURE__ */ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $input_show = /* @__PURE__ */ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $if2 = /* @__PURE__ */ _if("#text/2", "<!><!><!>", "b1c", $if_content3__setup);
const $if3 = /* @__PURE__ */ _if("#text/3", "<!><!><!>", "b1c", $if_content4__setup);
const $if4 = /* @__PURE__ */ _if("#text/4", 0, 0, $if_content5__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	$setHtml_getter($scope)()("Hello world");
	$setHtml2_getter($scope)()("Hello world");
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_value($scope["#childScope/1"], $setHtml_getter($scope));
	$if2($scope, true ? 0 : 1);
	$if3($scope, true ? 0 : 1);
	$if4($scope, true ? 0 : 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
