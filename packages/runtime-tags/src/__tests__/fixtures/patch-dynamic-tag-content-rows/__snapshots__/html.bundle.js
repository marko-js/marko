// tags/layout.marko
const $template = "<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>";
const $walks = "E l%bD%l b l";
const $setup$1 = [[], []];
_shells({
	b: "b !;E l%bD%l b ;<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>",
	b1: "b1;D%b%;<li><!><!></li>",
	b2: "b2;D%b%;<li><!><!></li>"
});
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 1);
	_html("<header>");
	_dynamic_tag($scope0_id, "c", input.header, {}, 10, 0, 0, _write_guard($scope0_reason, 2), $scope0_reason, 2);
	_html("</header><ul>");
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", n, void 0, $scope0_reason, 3)}`);
		_dynamic_tag($scope1_id, "b", input.row, {}, 18, 0, 0, _write_guard($scope0_reason, 4), $scope0_reason, 4);
		_html("</li>");
		_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "b0");
		_scope($scope1_id, { _: _write_if($scope0_reason, 4) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 3);
	_html(`</ul>${_el_resume($scope0_id, "d")}<ol>`);
	_for_of(input.rows, (n) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", n, void 0, $scope0_reason, 3)}`);
		_dynamic_tag($scope2_id, "b", input.content, {}, 26, 0, 0, $wg__input_content, $scope0_reason, 1);
		_html("</li>");
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "b3");
		_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "e", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 3);
	_html(`</ol>${_el_resume($scope0_id, "e")}</main>`);
	_scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.content,
		l: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.row
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_rows && _patch_fill($scope0_id, "vb4", input.content, !_server_guard($scope0_reason, 1)), $cg__input_rows && _content_withhold(input.content), _filled_guard($scope0_reason, 4) && $cg__input_rows && _patch_fill($scope0_id, "vb5", input.row, !_server_guard($scope0_reason, 4)), $cg__input_rows && _content_withhold(input.row));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a7: "a7;D ;<p> <input></p>",
	a6: "a6;D ;<em> <input></em>",
	a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_text = _client_guard($scope0_reason, 3), $wi__input_text = _write_if($scope0_reason, 3), $wi__input_rows__OR__input_text = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _patch_child($scope0_id, "a", 0);
	layout_default({
		title: input.title,
		rows: input.rows,
		header: attrTag({ content: _content("a5", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.text, void 0, $scope0_reason, 3)}<input></b>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope1_id, { _: $wi__input_text && _scope_with_id($scope0_id) }), $cg__input_text && "a0");
		}, $scope0_id) }),
		row: attrTag({ content: _content_resume("a6", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", input.text, void 0, $scope0_reason, 3)}<input></em>`);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, $cg__input_text ? "a1" : "a2");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope2_id, {
				_: $wi__input_rows__OR__input_text && _scope_with_id($scope0_id),
				Cg: $wi__input_text && 1
			}));
		}, $scope0_id) }),
		content: _content_resume("a7", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", input.text, void 0, $scope0_reason, 3)}<input></p>`);
			_unfilled_if($scope0_reason, 3) && _patch_init($scope3_id, $cg__input_text ? "a3" : "a4");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope3_id, {
				_: $wi__input_rows__OR__input_text && _scope_with_id($scope0_id),
				Cg: $wi__input_text && 2
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.text,
		g: $wi__input_text && $input_text__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va8", input.text, !_server_guard($scope0_reason, 3));
}, 1);
