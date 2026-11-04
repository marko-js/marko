// tags/child.marko
const $template$1 = "<span><!>|<!>|<!></span>";
const $walks$1 = "D%c%c%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.msg, 1, $scope0_reason, 0)}|${_text_mark($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)}|${_text_mark($scope0_id, "#text/2", input.label, 2, $scope0_reason, 2)}</span>`);
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
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content${_shell_marker([["__tests__/template.marko_1_n#0:8/subscribe"], []], ["#childScope/0>", $setup$1])}`,
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $ui__input_fail__OR__input_msg = _unfilled_if($scope0_reason, 0), $ui__input_msg = _unfilled_if($scope0_reason, 3), $ui__input_fail = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.fail ? boom(new Error(input.msg)) : "ok", 1, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_fail#0:6/subscribe");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_msg#0:7/subscribe");
		_patch_render($scope2_id, "__tests__/template.marko_2_input_fail#0:6_input_msg#0:7/setup", [_filled_guard($scope0_reason, 2) && ">input_fail", _filled_guard($scope0_reason, 3) && ">input_msg"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_fail#0:6/subscribe"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_msg#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _updates_from($scope0_reason, 1) << 5);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_patch_child_end();
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe", $cg__input_label);
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe", 0), "__tests__/template.marko_1_n#0:8/subscribe", 0);
		_resume_branch($scope1_id);
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		input_fail: ($ui__input_msg || $ui__input_fail__OR__input_msg) && input.fail,
		input_msg: ($ui__input_fail || $ui__input_fail__OR__input_msg) && input.msg,
		n,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/12": $n__closures,
		"ClosureScopes:input_fail/10": _write_if($scope0_reason, 2) && ($ui__input_fail || $ui__input_fail__OR__input_msg) && $input_fail__closures,
		"ClosureScopes:input_msg/11": _write_if($scope0_reason, 3) && ($ui__input_msg || $ui__input_fail__OR__input_msg) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"],
		n: "2:6"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $ui__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $ui__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg, !_server_guard($scope0_reason, 3)));
}, 1);
