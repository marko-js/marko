// tags/child.marko
const $template$1 = "<p> </p><!><!><!>";
const $walks$1 = "D l%b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_4*content": "__tests__/tags/child.marko_4*content;D ;<p> </p>",
	"__tests__/tags/child.marko_3*content": "__tests__/tags/child.marko_3*content;D%c%c%;<b><!> <!> <!></b>",
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content;D ;<p> </p>",
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content;D%c%c%;<b><!> <!> <!></b>",
	"__tests__/tags/child.marko": "__tests__/tags/child.marko;D l%b%;<p> </p><!><!><!>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_early = _client_guard($scope0_reason, 2), $cg__input_late = _client_guard($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_early = _write_if($scope0_reason, 2), $wi__input_late = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_early__closures = new Set();
	const $input_late__closures = new Set();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.n, 1, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "#text/0", input.early ? boom("early") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/child.marko_2_input_early#0:7/subscribe", $cg__input_early);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_early__closures, _scope($scope2_id, { _: $wi__input_early && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "5:2"), $cg__input_early && "__tests__/tags/child.marko_2_input_early#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "#text/0", $global$1.label, 1, 4, 0)} ${_text_mark($scope1_id, "#text/1", input.label, 2, $scope0_reason, 1)} ${_text_mark($scope1_id, "#text/2", err.message, 2, 4, 0)}</b>`);
		_any_client_guard($scope0_reason) && _fill_global_subscribe("__tests__/tags/child.marko_1_$global_label#0:13/subscribe", $scope1_id);
		_any_client_guard($scope0_reason) && _patch_render($scope1_id, "__tests__/tags/child.marko_1_$global_label#0:13/subscribe");
		_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/tags/child.marko_1_input_label#0:6/subscribe", $cg__input_label);
		_subscribe(_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "7:4"), _any_client_guard($scope0_reason) && $cg__input_label && "__tests__/tags/child.marko_1_input_label#0:6/subscribe");
	}, 0, "__tests__/tags/child.marko_1*content", "__tests__/tags/child.marko_2*content", 1, 1, 1);
	_try($scope0_id, "#text/2", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_text_mark($scope4_id, "#text/0", input.late ? boom("late") : "ok", 1, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "__tests__/tags/child.marko_4_input_late#0:8/subscribe", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_late__closures, _scope($scope4_id, { _: $wi__input_late && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "9:2"), $cg__input_late && "__tests__/tags/child.marko_4_input_late#0:8/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_mark($scope3_id, "#text/0", $global$1.label, 1, 4, 0)} ${_text_mark($scope3_id, "#text/1", input.label, 2, $scope0_reason, 1)} ${_text_mark($scope3_id, "#text/2", err.message, 2, 4, 0)}</b>`);
		_any_client_guard($scope0_reason) && _fill_global_subscribe("__tests__/tags/child.marko_3_$global_label#0:13/subscribe", $scope3_id);
		_any_client_guard($scope0_reason) && _patch_render($scope3_id, "__tests__/tags/child.marko_3_$global_label#0:13/subscribe");
		_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "__tests__/tags/child.marko_3_input_label#0:6/subscribe", $cg__input_label);
		_subscribe(_any_client_guard($scope0_reason) && _unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/9": $wi__input_label && 1
		}, "__tests__/tags/child.marko", "11:4"), _any_client_guard($scope0_reason) && $cg__input_label && "__tests__/tags/child.marko_3_input_label#0:6/subscribe");
	}, 0, "__tests__/tags/child.marko_3*content", "__tests__/tags/child.marko_4*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_early/10": $wi__input_early && _unfilled_if($scope0_reason, 2) && $input_early__closures,
		"ClosureScopes:input_late/11": $wi__input_late && _unfilled_if($scope0_reason, 3) && $input_late__closures
	}, "__tests__/tags/child.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/tags/child.marko_0_input_label#6/subscribers", "input_label");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)($walks$1)};${((_w0) => `<button> </button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2 | (_updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 0) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	child_default({
		n,
		early: true,
		late: input.late,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
