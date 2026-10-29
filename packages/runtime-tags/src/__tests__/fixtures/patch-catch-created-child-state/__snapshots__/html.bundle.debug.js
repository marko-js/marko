// tags/child.marko
const $template$1 = "<span><!> <!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%c%;<span><!> <!></span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.message, 1, $scope0_reason, 0)} ${_text_resume($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([["__tests__/template.marko_2_count#0:7/init"], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 2), $cg__input_fail = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_fail#0:5/subscribe");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_msg#0:6/subscribe");
		_patch_init_entry($scope1_id, "__tests__/template.marko_1_input_fail#0:5_input_msg#0:6/init", [_filled_guard($scope0_reason, 1) && ">input_fail", _filled_guard($scope0_reason, 2) && ">input_msg"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"), $cg__input_fail && "__tests__/template.marko_1_input_fail#0:5/subscribe"), $cg__input_msg && "__tests__/template.marko_1_input_msg#0:6/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(12);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		child_default({
			message: err.message,
			count
		});
		_patch_child_end();
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_2_count#0:7/subscribe");
	}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_filled_guard($scope0_reason, 1) && $cg__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail);
	_filled_guard($scope0_reason, 2) && $cg__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg);
	_scope($scope0_id, {
		input_fail: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.fail,
		input_msg: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.msg,
		count,
		"ClosureScopes:count/10": $count__closures,
		"ClosureScopes:input_fail/8": _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		"ClosureScopes:input_msg/9": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_fail: ["input.fail"],
		input_msg: ["input.msg"],
		count: "4:6"
	});
}, 1);
