// tags/card/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !; ;<ul></ul>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;D%b%;<li><!><!></li>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_count = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.count, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", i, void 0, $scope0_reason, 0)}`);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
		_html("</li>");
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/card/index.marko_1_input_content#0:4/init");
		$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/card/index.marko_1*shell", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}`);
	$scope0_page ? _scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content }, "__tests__/tags/card/index.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 1) && $cg__input_count && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_count && _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({
		count: input.count,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_note#0:4/init" : "__tests__/template.marko_1_input_note#0:4/subscribe");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
}, 1);
