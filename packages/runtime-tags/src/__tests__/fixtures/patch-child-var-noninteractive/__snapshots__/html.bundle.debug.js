// tags/kid.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/kid.marko_0"]];
_shells({ "__tests__/tags/kid.marko": "^__tests__/tags/kid.marko !__tests__/tags/kid.marko_0; D ;<button> </button>" });
_stateful_return("__tests__/tags/kid.marko");
var kid_default = _template("__tests__/tags/kid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = c;
	_script($scope0_id, "__tests__/tags/kid.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/kid.marko_fill0", c, 1);
	_scope($scope0_id, { c }, "__tests__/tags/kid.marko", 0, { c: "1:6" });
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&D l`)($walks$1)};${((_w0) => `${_w0}<p> </p>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let x = kid_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_x#3/var");
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", x)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
