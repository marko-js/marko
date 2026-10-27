// template.marko
const $Card_content2__walks = " b";
const $Card_content2__template = "<section></section>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Card_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Card_content2__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `D/${_w0}&l`)($Card_content2__walks)};${((_w0) => `<main>${_w0}</main>`)($Card_content2__template)}`)(),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ show, content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 2), $wg__show = _write_guard($scope2_reason, 1), $cg__show = _client_guard($scope2_reason, 1);
		_html("<section>");
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", content, {}, 2, 0, 0, $wg__content, $scope2_reason, 2);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6");
				return 0;
			}
		}, $scope2_id, "#section/0", 1, $wg__show, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 1);
		_html(`</section>${_el_resume($scope2_id, "#section/0", $wg__show)}`);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { content: _unfilled_if($scope2_reason, 1) && content }, "__tests__/template.marko", "1:2", { content: "1:22" }) || (_filled_guard($scope2_reason, 2) && $cg__show && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", content, !_server_guard($scope2_reason, 2)), $cg__show && _content_withhold(content));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	Card.content({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_1_input_note#0:4/init" : "__tests__/template.marko_1_input_note#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:4"));
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 2));
}, 1);
