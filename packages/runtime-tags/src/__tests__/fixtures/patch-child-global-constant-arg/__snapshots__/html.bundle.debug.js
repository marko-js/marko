// tags/label-text.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/label-text.marko": "__tests__/tags/label-text.marko;D ;<p> </p>" });
var label_text_default = _template("__tests__/tags/label-text.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.v, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/label-text.marko", 0);
});

// tags/pass.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/pass.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/pass.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$2) });
var pass_default = _template("__tests__/tags/pass.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason((2 | _mask_group($scope0_reason, 0)) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	label_text_default({ v: input.x + $global$1.suffix });
	_patch_child_end();
	_fill_global_subscribe("__tests__/tags/pass.marko_0_input_x#3_$global_suffix#5", $scope0_id, $cg__input_x);
	$cg__input_x && _patch_write($scope0_id, "PatchWrite:input_x", input.x, 1);
	_scope($scope0_id, {
		input_x: _unfilled_if($scope0_reason, 0) && input.x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/pass.marko", 0, { input_x: ["input.x"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)($walks$1)};${((_w0) => `${_w0}<button> </button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	pass_default({ x: "a" });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
