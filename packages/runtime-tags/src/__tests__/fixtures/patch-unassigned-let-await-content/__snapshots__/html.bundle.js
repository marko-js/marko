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
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 3), $wi__input_v = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $input_v__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child(0);
			wrap_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", Promise.resolve(input.v), (r) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "a", r + input.w, $wg__input_v__OR__input_w)}</p>`);
					_subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, { c: $wi__input_w && r }), "a0", $wg__input_v__OR__input_w);
					$wg__input_v__OR__input_w || _resume_branch($scope3_id);
				}, void 0, 0);
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", 0);
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		i: $wi__input_w && $input_w__closures,
		h: $wi__input_v && $input_v__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va3", input.v, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
