// tags/show-label.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/show-label.marko": "__tests__/tags/show-label.marko;D ;<i> </i>" });
var show_label_default = _template("__tests__/tags/show-label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$2 = $global();
	_html(`<i>${_text_mark($scope0_id, "#text/0", $global$2.label, 1, 4, 0)}</i>`);
	_fill_global_subscribe("__tests__/tags/show-label.marko_0_$global_label#4", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/show-label.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<i><!>:<!></i>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content${_shell_marker([[], ["__tests__/template.marko_1"]], ["#childScope/3>", $setup$1], ["#childScope/4>", [[], []]])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D l%;<u> </u><!><!>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;D%c%;<s><!>:<!></s>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0), $cg__input_late = _client_guard($scope0_reason, 2), $wi__input_late = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_show__closures = new Set();
	const $input_late__closures = new Set();
	const $global$1 = $global();
	_try($scope0_id, "#text/0", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_mark($scope3_id, "#text/0", input.late ? boom("late") : "ok", 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_late#0:5/subscribe", $cg__input_late);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_late__closures, _scope($scope3_id, { _: $wi__input_late && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_late && "__tests__/template.marko_3_input_late#0:5/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const Label = { content: _content("__tests__/template.marko_4*content", ({ x }) => {
			const $scope4_id = _scope_id();
			const $scope4_reason = _scope_reason();
			_html(`<i>${_text_mark($scope4_id, "#text/0", x, 1, $scope4_reason, 0)}:${_text_mark($scope4_id, "#text/1", $global$1.label, 2, 4, 0)}</i>`);
			_fill_global_subscribe("__tests__/template.marko_4_$global_label#0:16", $scope4_id);
			_scope($scope4_id, {}, "__tests__/template.marko", "7:6");
		}, $scope1_id, 0) };
		let count = 0;
		_html(`<b>${_text_mark($scope1_id, "#text/0", err.message, 1, 4, 0)}</b><em>${_text_mark($scope1_id, "#text/2", count + ":" + $global$1.label)}</em>${_el_mark($scope1_id, "#em/1")}`);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/3", 0);
		show_label_default({});
		_patch_child_end();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/4", 1);
		Label.content({ x: 1 });
		_patch_child_end();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<u>${_text_mark($scope2_id, "#text/0", $global$1.label, 1, 4, 0)}</u>`);
				_for_until(input.n, 0, 1, (i) => {
					const $scope5_id = _scope_id();
					_html(`<s>${_text_mark($scope5_id, "#text/0", i, 1, $scope0_reason, 1)}:${_text_mark($scope5_id, "#text/1", $global$1.label, 2, 4, 0)}</s>`);
					_fill_global_subscribe("__tests__/template.marko_5_$global_label#0:16", $scope2_id);
					_scope($scope5_id, {}, "__tests__/template.marko", "15:8");
				}, 0, $scope2_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_5*shell", $scope0_reason, 1);
				_fill_global_subscribe("__tests__/template.marko_2_$global_label#0:16", $scope2_id);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_n#0:4/subscribe", $cg__input_n);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "13:6"), $cg__input_n && "__tests__/template.marko_2_input_n#0:4/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/5", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
		_fill_global_subscribe("__tests__/template.marko_1_$global_label#0:16_count#9", $scope1_id, 1);
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_show#0:3/subscribe", $cg__input_show);
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_count#9/fill", count, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, {
			count,
			_: _scope_with_id($scope0_id),
			"#childScope/3": _existing_scope($childScope),
			"#childScope/4": _existing_scope($childScope2)
		}, "__tests__/template.marko", "6:4", { count: "8:10" }), $cg__input_show && "__tests__/template.marko_1_input_show#0:3/subscribe");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_3*content", 1, 1);
	_scope($scope0_id, {
		input_show: input.show,
		input_n: input.n,
		"ClosureScopes:input_n/7": _write_if($scope0_reason, 1) && $input_n__closures,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 0) && $input_show__closures,
		"ClosureScopes:input_late/8": $wi__input_late && _unfilled_if($scope0_reason, 2) && $input_late__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_n: ["input.n"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#3/subscribers", "input_show"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_n#4/subscribers", "input_n"));
}, 1);
