// tags/card/index.marko
const $template = "<ul></ul>";
_shells({
	b: "b !; ;<ul></ul>",
	b0: "b0;D%b%;<li><!><!></li>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.count, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", i, void 0, $scope0_reason, 0)}`);
		_dynamic_tag($scope1_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
		_html("</li>");
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
		_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.content }) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb2", input.content, !_server_guard($scope0_reason, 1)), _client_guard($scope0_reason, 0) && _content_withhold(input.content));
});

// template.marko
_shells({
	a0: "a0,",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		count: input.count,
		content: _content_resume("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 2)}</em>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_html("</main>");
	_patch_write($scope0_id, "we", input.note, 1);
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.note,
		f: _write_if($scope0_reason, 2) && $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1);
