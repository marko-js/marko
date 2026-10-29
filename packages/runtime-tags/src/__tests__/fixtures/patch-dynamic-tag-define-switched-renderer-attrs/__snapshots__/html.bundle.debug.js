// template.marko
const $Wrap_content__walks = "D l%c";
const $Wrap_content__template = "<span> </span><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,b",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,a",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b/${_w0}&b`)($Wrap_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_t = _write_if($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_t__closures = new Set();
	const A = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("a");
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html("b");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_1*content", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span>${_text_resume($scope1_id, "#text/0", n, 1, $scope1_reason, 0)}</span>`);
		_dynamic_tag($scope1_id, "#text/1", content, { title: input.t }, 1, 0, 0, _write_guard($scope0_reason, 0) || _write_guard($scope1_reason, 1), (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0, 0, 1, $scope1_reason);
		_filled_guard($scope1_reason, 1) && _client_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:content", content);
		_patch_init_entry($scope1_id, "__tests__/template.marko_1_input_t#0:3_content#5/init", [_filled_guard($scope0_reason, 0) && ">input_t", _filled_guard($scope1_reason, 1) && "content"], (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && $wi__input_t && $input_t__closures, _scope($scope1_id, {
			content: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope0_reason, 2)) && content,
			_: ($wi__input_t || _write_if($scope1_reason, 1)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { content: "3:19" }), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && "__tests__/template.marko_1_input_t#0:3/subscribe");
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Wrap.content({
		n: input.n,
		content: input.x === 1 ? A : B
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_t: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.t,
		A: _unfilled_if($scope0_reason, 2) && A,
		B: _unfilled_if($scope0_reason, 2) && B,
		"ClosureScopes:input_t/9": $wi__input_t && $input_t__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_t: ["input.t"],
		A: "1:9",
		B: "2:9"
	}) || (_filled_guard($scope0_reason, 0) && $cg__input_x && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.t, !_server_guard($scope0_reason, 0)), $cg__input_x && _content_withhold(input.t));
}, 1);
