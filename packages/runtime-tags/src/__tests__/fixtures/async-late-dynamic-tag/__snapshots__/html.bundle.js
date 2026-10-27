// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_content, 0);
	_html("</section>");
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wi__input_as__OR__input_p = _write_if($scope0_reason, 0), $wg__input_q = _write_guard($scope0_reason, 3), $wi__input_q = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_q__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.as, { class: "box" }, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.p, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "a", v, $wg__input_p)}</em>`);
			$wi__input_p && _scope($scope3_id, {});
		}, $wg__input_p);
		$wi__input_as__OR__input_p && _subscribe($wi__input_p && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", 0);
		$wi__input_as__OR__input_p && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ g: input.p }]), 0, _write_guard($scope0_reason, 1));
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.q, (w) => {
			const $scope4_id = _scope_id();
			_html(`<b>${_text_resume($scope4_id, "a", w, $wg__input_q)}</b>`);
			$wi__input_q && _scope($scope4_id, {});
		}, $wg__input_q);
		$wi__input_q && _subscribe($input_q__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_q && _resume_branch($scope2_id);
	}, $scope0_id) });
	_html(`<button>interactive</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.p,
		i: $wi__input_p && $input_p__closures,
		j: $wi__input_q && $input_q__closures
	});
}, 1);
