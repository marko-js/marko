// tags/outer.marko
const $template$1 = "<button>plain</button><section></section><i></i><p>body</p>";
const $walks$1 = " b b b b";
const $setup$1 = [["__tests__/tags/outer.marko_0_input_label#7_f#8/init"], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko __tests__/tags/outer.marko_0_input_label#7_f#8/init!__tests__/tags/outer.marko_0; b b b ;<button>plain</button><section></section><i></i><p>body</p>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<section`);
	_attrs_content(f(input.label), "#section/1", $scope0_id, "section", 0, 1, 0, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f");
	_html(`</section>${_el_resume($scope0_id, "#section/1")}<i`);
	_attrs_content({ title: f(input.label).title }, "#i/2", $scope0_id, "i", 1, 1, 0, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f");
	_html(`</i>${_el_resume($scope0_id, "#i/2")}<p${_attrs({ title: f(input.label).title }, "#p/3", $scope0_id, "p", 0, (_mask_group($scope0_reason, 1) | _mask_group($scope0_reason, 0)) << 1, 0, "f")}>body</p>${_el_resume($scope0_id, "#p/3")}`);
	_script($scope0_id, "__tests__/tags/outer.marko_0_input_label#7_f#8");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:f", f, 1);
	_scope($scope0_id, {
		input_label: input.label,
		f: _unfilled_if($scope0_reason, 1) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6",
		"EventAttributes:#section/1": ["...f(input.label)", "3:13"],
		"EventAttributes:#i/2": ["...{ title: f(input.label).title }", "4:7"],
		"EventAttributes:#p/3": ["...{ title: f(input.label).title }", "5:7"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label), _content_withhold(input.fmt));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<b>body</b>");
	}, $scope0_id) };
	const wrap = _resume((v) => ({
		title: "w-" + v,
		content: Body.content
	}), "__tests__/template.marko_0/wrap", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		Body_content: Body?.content,
		wrap: _unfilled_if($scope0_reason, 0) && wrap
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"],
		wrap: "2:8"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);
