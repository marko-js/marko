// tags/wrap.marko
_shells({ b: "b !b0; D l%;<button> </button><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", n, 1);
	_scope($scope0_id, {
		f: input.content,
		g: n
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(1);
			wrap_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_patch_child(0);
				Body.content({});
				_patch_child_end();
				_scope($scope3_id, { _: _scope_with_id($scope2_id) });
			}, $scope2_id) });
			_patch_child_end();
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a");
	_scope($scope0_id, {
		e: input.w,
		g: _write_if($scope0_reason, 1) && $input_w__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.w, !_server_guard($scope0_reason, 1));
}, 1);
