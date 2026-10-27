// template.marko
const $Info_content__walks = "b";
const $Info_content__template = "<p>info</p>";
_shells({
	a: /*@__PURE__*/ (() => `a !a6;${((_w0) => ` D l/${_w0}&%c`)($Info_content__walks)};${((_w0) => `<button> </button>${_w0}<!><!>`)($Info_content__template)}`)(),
	a5: /*@__PURE__*/ (() => `a5 >a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_page = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	const Info = { content: _content("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<p>info</p>");
		_script($scope1_id, "a1", 0, (_filled_guard($scope0_reason, 1) || _filled_guard($scope1_reason, 0)) && (_client_guard($scope0_reason, 1) || _client_guard($scope1_reason, 0) ? 2 : 1), _filled_guard($scope0_reason, 1) && ">g", _filled_guard($scope1_reason, 0) && "c");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a2");
		_client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && _patch_init($scope1_id, "a3");
		_subscribe($wi__input_page && $input_page__closures, _scope($scope1_id, {
			c: label,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && "a2", 0) || _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "xc", label, !_server_guard($scope1_reason, 0));
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "c", 0);
	Info.content({ label: count });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope2 = _patch_child($scope2_id, "a", 1, void 0, $scope0_id);
			Info.content({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a4");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "d", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a5"], $scope0_reason, 2);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		g: input.page,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.label,
		j: count,
		k: $wi__input_page && $input_page__closures,
		c: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.page, !_server_guard($scope0_reason, 1)));
}, 1);
