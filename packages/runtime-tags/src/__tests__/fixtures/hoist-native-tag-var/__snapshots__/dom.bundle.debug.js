// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
let id = 0;
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => $scope.input.value()?.classList.add(`child${id++}`));
const $input$1 = /* @__PURE__ */ _const("input", $input__script);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!><!>${_w0}<hr><!><!>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `b%b/${_w0}&b%c`)("");
const $el2_getter = /* @__PURE__ */ _hoist("#div/0", "BranchScopes:#text/2");
const $el_getter = _hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/0", "BranchScopes:#text/0", "BranchScopes:#text/0");
const $if_content2__$el_getter = _el("__tests__/template.marko_2_#div", "#div/0");
const $if_content2__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input$1($scope["#childScope/1"], { value: $if_content2__$el_getter($scope) });
};
const $if_content__if = /* @__PURE__ */ _if("#text/0", /* @__PURE__ */ ((_w0) => `<div></div>${_w0}`)(""), /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)(""), $if_content2__setup);
const $if_content__input_show = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1));
const $if_content__setup = $if_content__input_show;
const $if = /* @__PURE__ */ _if("#text/0", "<!><!><!>", "b%c", $if_content__setup);
const $input_show = /* @__PURE__ */ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $if2 = /* @__PURE__ */ _if("#text/2", "<div></div>", " b");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const el = $el_getter($scope)();
		if (el) {
			el.innerHTML = "Hello World";
		}
	}
	{
		const el = $el2_getter($scope)();
		if (el) {
			el.innerHTML = "Hello World";
		}
	}
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input$1($scope["#childScope/1"], { value: $el_getter($scope) });
	$if2($scope, true ? 0 : 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
