// tags/wrap.marko
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.content,
		g: n
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	const Body = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", input.w, $wg__input_w)}</p>`);
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_w);
		$wg__input_w || _resume_branch($scope1_id);
	}, $scope0_id) };
	if (show) {
		const $scope2_id = _scope_id();
		wrap_default({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			Body.content({});
			_scope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, $scope2_id) });
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	});
	_resume_branch($scope0_id);
}, 1);
