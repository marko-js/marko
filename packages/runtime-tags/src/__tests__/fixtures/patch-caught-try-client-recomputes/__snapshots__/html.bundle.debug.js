// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "^__tests__/tags/child.marko," });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_count = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_count = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $return = input.label + input.count;
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_label#2_input_count#3/setup", (($fg__input_label ? " input_label" : "") + ($fg__input_count ? " input_count" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 2) && $ui__input_label__OR__input_count && input.label,
		input_count: _write_if($scope0_reason, 1) && $ui__input_label__OR__input_count && input.count
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		input_count: ["input.count"]
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), $fg__input_count && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_count", input.count, !_server_guard($scope0_reason, 2)));
	return $return;
});

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
function boom(message) {
	throw new Error(message);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<p> </p>",
	"__tests__/template.marko_3*content": `__tests__/template.marko_3*content${_shell_marker([[], []], ["#childScope/1>", $setup$1])}`,
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content${_shell_marker([[], []], ["#childScope/1>", $setup$1])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_count = _client_guard($scope0_reason, 2), $cg__input_early = _client_guard($scope0_reason, 3), $uf__input_label__OR__input_count = _updates_from($scope0_reason, 0), $uf__input_count = _updates_from($scope0_reason, 2), $cg__input_late = _client_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_count = _write_if($scope0_reason, 2), $wi__input_early = _write_if($scope0_reason, 3), $wi__input_late = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_count__closures = new Set();
	const $input_early__closures = new Set();
	const $input_late__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.early ? boom("early") : "ok", 1, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_early#0:6/subscribe", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_early__closures, _scope($scope2_id, { _: $wi__input_early && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_early && "__tests__/template.marko_2_input_early#0:6/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_label__OR__input_count = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1);
		$ui__input_label && _patch_write($scope1_id, "PatchMarkedWrite:err_message", err?.message);
		_html(`<b>${_text_mark($scope1_id, "#text/0", input.label + err.message, 1, (2 | $uf__input_label) << 1, 0)}</b>`);
		_set_scope_reason($uf__input_label__OR__input_count << 1 | $uf__input_label << 3 | $uf__input_count << 5);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0, $ui__input_label__OR__input_count && 1);
		let text = child_default({
			label: input.label,
			count: input.count
		});
		$ui__input_label__OR__input_count && _var($scope1_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_1_text#8/var");
		_patch_child_end();
		_html(`<i>${_text_mark($scope1_id, "#text/3", text, 1, $scope0_reason, 0)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_label#0:4/subscribe", $cg__input_label);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_count#0:5/subscribe", $cg__input_count);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4_err_message#6/setup", "err_message" + (_filled_guard($scope0_reason, 1) ? " >input_label" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_count__closures, _subscribe($ui__input_label && $input_label__closures, _scope($scope1_id, {
			err_message: $ui__input_label && err?.message,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4", { err_message: ["err.message", "6:11"] }), $cg__input_label && "__tests__/template.marko_1_input_label#0:4/subscribe"), $cg__input_count && "__tests__/template.marko_1_input_count#0:5/subscribe");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1);
	_try($scope0_id, "#text/1", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_mark($scope4_id, "#text/0", input.late ? boom("late") : "ok", 1, $scope0_reason, 4)}</p>`);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_late#0:7/subscribe", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_late__closures, _scope($scope4_id, { _: $wi__input_late && _scope_with_id($scope0_id) }, "__tests__/template.marko", "12:2"), $cg__input_late && "__tests__/template.marko_4_input_late#0:7/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id(), $ui__input_label__OR__input_count2 = _unfilled_if($scope0_reason, 0), $ui__input_label2 = _unfilled_if($scope0_reason, 1);
		$ui__input_label2 && _patch_write($scope3_id, "PatchMarkedWrite:err_message", err?.message);
		_html(`<b>${_text_mark($scope3_id, "#text/0", input.label + err.message, 1, (2 | $uf__input_label) << 1, 0)}</b>`);
		_set_scope_reason($uf__input_label__OR__input_count << 1 | $uf__input_label << 3 | $uf__input_count << 5);
		const $childScope2 = _peek_scope_id($scope3_id, "#childScope/1", 1, $ui__input_label__OR__input_count2 && 1);
		let text = child_default({
			label: input.label,
			count: input.count
		});
		$ui__input_label__OR__input_count2 && _var($scope3_id, "#scopeOffset/2", $childScope2, "__tests__/template.marko_3_text#8/var");
		_patch_child_end();
		_html(`<i>${_text_mark($scope3_id, "#text/3", text, 1, $scope0_reason, 0)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:4/subscribe", $cg__input_label);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_count#0:5/subscribe", $cg__input_count);
		_patch_render($scope3_id, "__tests__/template.marko_3_input_label#0:4_err_message#6/setup", "err_message" + (_filled_guard($scope0_reason, 1) ? " >input_label" : ""), (2 | $uf__input_label) << 1, 0);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_count__closures, _subscribe($ui__input_label2 && $input_label__closures, _scope($scope3_id, {
			err_message: $ui__input_label2 && err?.message,
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope2),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 1,
			"ClosureSignalIndex:input_count/9": $wi__input_count && 1
		}, "__tests__/template.marko", "14:4", { err_message: ["err.message", "14:11"] }), $cg__input_label && "__tests__/template.marko_3_input_label#0:4/subscribe"), $cg__input_count && "__tests__/template.marko_3_input_count#0:5/subscribe");
	}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_4*content", 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		input_count: input.count,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_count/9": $wi__input_count && $input_count__closures,
		"ClosureScopes:input_early/10": $wi__input_early && _unfilled_if($scope0_reason, 3) && $input_early__closures,
		"ClosureScopes:input_late/11": $wi__input_late && _unfilled_if($scope0_reason, 4) && $input_late__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_count: ["input.count"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_count", input.count, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_count#5/subscribers", "input_count"));
}, 1);
