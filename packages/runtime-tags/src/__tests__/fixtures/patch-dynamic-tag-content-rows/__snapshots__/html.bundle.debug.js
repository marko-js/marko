// tags/layout.marko
const $template$1 = "<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>";
const $walks$1 = "E l%bD%l b l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/layout.marko": "__tests__/tags/layout.marko !;E l%bD%l b ;<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>",
	"__tests__/tags/layout.marko_1*shell": "__tests__/tags/layout.marko_1*shell;D%b%;<li><!><!></li>",
	"__tests__/tags/layout.marko_2*shell": "__tests__/tags/layout.marko_2*shell;D%b%;<li><!><!></li>"
});
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("<header>");
	_dynamic_tag($scope0_id, "#text/2", input.header, {}, 10, 0, 0, _write_guard($scope0_reason, 2), $scope0_reason, 2);
	_html("</header><ul>");
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", n, void 0, $scope0_reason, 3)}`);
		_dynamic_tag($scope1_id, "#text/1", input.row, {}, 18, 0, 0, _write_guard($scope0_reason, 4), $scope0_reason, 4);
		_html("</li>");
		_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/tags/layout.marko_1_input_row#0:11/init");
		_scope($scope1_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) }, "__tests__/tags/layout.marko", "6:6");
	}, 0, $scope0_id, "#ul/3", 1, void 0, void 0, void 0, void 0, "__tests__/tags/layout.marko_1*shell", $scope0_reason, 3);
	_html(`</ul>${_el_resume($scope0_id, "#ul/3")}<ol>`);
	_for_of(input.rows, (n) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "#text/0", n, void 0, $scope0_reason, 3)}`);
		_dynamic_tag($scope2_id, "#text/1", input.content, {}, 26, 0, 0, $wg__input_content, $scope0_reason, 1);
		_html("</li>");
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/tags/layout.marko_2_input_content#0:8/init");
		_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/layout.marko", "11:6");
	}, 0, $scope0_id, "#ol/4", 1, void 0, void 0, void 0, void 0, "__tests__/tags/layout.marko_2*shell", $scope0_reason, 3);
	_html(`</ol>${_el_resume($scope0_id, "#ol/4")}</main>`);
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.content,
		input_row: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.row
	}, "__tests__/tags/layout.marko", 0, {
		input_content: ["input.content"],
		input_row: ["input.row"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_rows && _patch_fill($scope0_id, "PatchFill:__tests__/tags/layout.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_rows && _content_withhold(input.content), _filled_guard($scope0_reason, 4) && $cg__input_rows && _patch_fill($scope0_id, "PatchFill:__tests__/tags/layout.marko_fill1", input.row, !_server_guard($scope0_reason, 4)), $cg__input_rows && _content_withhold(input.row));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> <input></p>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> <input></em>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_text = _client_guard($scope0_reason, 3), $wi__input_text = _write_if($scope0_reason, 3), $wi__input_rows__OR__input_text = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	layout_default({
		title: input.title,
		rows: input.rows,
		header: attrTag({ content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></b>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope1_id, { _: $wi__input_text && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_text && "__tests__/template.marko_1_input_text#0:5/subscribe");
		}, $scope0_id) }),
		row: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>${_text_resume($scope2_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></em>`);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_text ? "__tests__/template.marko_2_input_text#0:5/init" : "__tests__/template.marko_2_input_text#0:5/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope2_id, {
				_: $wi__input_rows__OR__input_text && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_text/6": $wi__input_text && 1
			}, "__tests__/template.marko", "4:4"));
		}, $scope0_id) }),
		content: _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></p>`);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_text ? "__tests__/template.marko_3_input_text#0:5/init" : "__tests__/template.marko_3_input_text#0:5/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope3_id, {
				_: $wi__input_rows__OR__input_text && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_text/6": $wi__input_text && 2
			}, "__tests__/template.marko", "1:2"));
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_text: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.text,
		"ClosureScopes:input_text/6": $wi__input_text && $input_text__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_text: ["input.text"] }) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.text, !_server_guard($scope0_reason, 3));
}, 1);
