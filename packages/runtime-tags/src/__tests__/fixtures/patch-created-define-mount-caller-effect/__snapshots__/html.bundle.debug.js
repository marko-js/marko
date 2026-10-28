// template.marko
const $Info_content__walks = "b";
const $Info_content__template = "<p>info</p>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!><!>`)($Info_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&%c`)($Info_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` D l/${_w0}&%c`)($Info_content__walks)};${((_w0) => `<button> </button>${_w0}<!><!>`)($Info_content__template)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell >#childScope/0>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_page = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Info = { content: _content("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<p>info</p>");
		_script($scope1_id, "__tests__/template.marko_1_input_page#0:6_label#2", 0, (_filled_guard($scope0_reason, 1) || _filled_guard($scope1_reason, 0)) && (_client_guard($scope0_reason, 1) || _client_guard($scope1_reason, 0) ? 2 : 1), _filled_guard($scope0_reason, 1) && ">input_page", _filled_guard($scope1_reason, 0) && "label");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_page#0:6/subscribe");
		_client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_page#0:6_label#2/init");
		_subscribe($wi__input_page && $input_page__closures, _scope($scope1_id, {
			label,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { label: "3:16" }), _client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && "__tests__/template.marko_1_input_page#0:6/subscribe", 0) || _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 0));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	Info.content({ label: count });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1, 0, $scope0_id);
			Info.content({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:8/init");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_page: input.page,
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		count,
		"ClosureScopes:input_page/10": $wi__input_page && $input_page__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_label: ["input.label"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_page", input.page, !_server_guard($scope0_reason, 1)));
}, 1);
