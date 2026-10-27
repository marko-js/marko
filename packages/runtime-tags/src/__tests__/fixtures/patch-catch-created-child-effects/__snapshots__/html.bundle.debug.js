// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], ["__tests__/tags/child.marko_0"]];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !__tests__/tags/child.marko_0;D ;<span> </span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.message, void 0, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_count#5");
	_script($scope0_id, "__tests__/tags/child.marko_0_input_label#4");
	_script($scope0_id, "__tests__/tags/child.marko_0_input_message#3");
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_input_message#3" : "PatchEffect:__tests__/tags/child.marko_0_input_message#3", "input_message");
	_filled_guard($scope0_reason, 1) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_input_label#4" : "PatchEffect:__tests__/tags/child.marko_0_input_label#4", "input_label");
	_filled_guard($scope0_reason, 2) && _patch_effect($scope0_id, _client_guard($scope0_reason, 2) ? "PatchQueuedEffect:__tests__/tags/child.marko_0_input_count#5" : "PatchEffect:__tests__/tags/child.marko_0_input_count#5", "input_count");
	$scope0_page ? _scope($scope0_id, {
		input_message: input.message,
		input_label: input.label,
		input_count: input.count
	}, "__tests__/tags/child.marko", 0, {
		input_message: ["input.message"],
		input_label: ["input.label"],
		input_count: ["input.count"]
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_message", input.message, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_count", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([["__tests__/template.marko_1_input_msg#0:5/subscribe", "__tests__/template.marko_1_count#0:7/init"], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_msg = _client_guard($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_msg__closures = new Set();
	const $count__closures = new Set();
	const $input_fail__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_msg#0:5/subscribe");
		(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_fail#0:6/subscribe");
		_patch_join_init($scope2_id, "__tests__/template.marko_2_input_msg#0:5_input_fail#0:6/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">input_msg", _filled_guard($scope0_reason, 2) && ">input_fail");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_msg/8": $wi__input_msg && 1
		}, "__tests__/template.marko", "6:2"), "__tests__/template.marko_2_input_msg#0:5/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_fail#0:6/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_set_scope_reason(36 | _mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "#childScope/0");
		child_default({
			message: err.message,
			label: input.msg,
			count
		});
		$cg__input_msg && _patch_init($scope1_id, "__tests__/template.marko_1_input_msg#0:5/init");
		$scope1_page && _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_msg__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "8:4"), "__tests__/template.marko_1_input_msg#0:5/subscribe"), "__tests__/template.marko_1_count#0:7/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_filled_guard($scope0_reason, 2) && $cg__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail);
	$scope0_page ? _scope($scope0_id, {
		input_msg: input.msg,
		input_fail: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.fail,
		count,
		"ClosureScopes:input_msg/8": $wi__input_msg && $input_msg__closures,
		"ClosureScopes:count/10": $count__closures,
		"ClosureScopes:input_fail/9": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_msg: ["input.msg"],
		input_fail: ["input.fail"],
		count: "4:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
