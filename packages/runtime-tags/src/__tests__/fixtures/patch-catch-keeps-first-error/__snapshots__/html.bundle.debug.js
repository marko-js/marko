// tags/child.marko
const $template$1 = "<span><!>|<!>|<!></span>";
const $walks$1 = "D%c%c%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.msg, void 0, $scope0_reason, 0)}|${_text_resume($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)}|${_text_resume($scope0_id, "#text/2", input.label, 2, $scope0_reason, 2)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(e) {
	throw e;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([["__tests__/template.marko_1_input_label#0:5/subscribe", "__tests__/template.marko_1_n#0:8/init"], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 3), $cg__input_fail = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.fail ? boom(new Error(input.msg)) : "ok", void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_fail#0:6/subscribe");
		(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_msg#0:7/subscribe");
		_patch_join_init($scope2_id, "__tests__/template.marko_2_input_fail#0:6_input_msg#0:7/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_fail", _filled_guard($scope0_reason, 3) && ">input_msg");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_fail && "__tests__/template.marko_2_input_fail#0:6/subscribe"), $cg__input_msg && "__tests__/template.marko_2_input_msg#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_input_label#0:5/subscribe"), "__tests__/template.marko_1_n#0:8/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_filled_guard($scope0_reason, 2) && $cg__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail);
	_filled_guard($scope0_reason, 3) && $cg__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg);
	_scope($scope0_id, {
		input_label: input.label,
		input_fail: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.fail,
		input_msg: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.msg,
		n,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/12": $n__closures,
		"ClosureScopes:input_fail/10": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		"ClosureScopes:input_msg/11": _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"],
		n: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
