// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_p = _write_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_p__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let x = input.v;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", input.p, (r) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "a", r, $wg__input_p)}</b>`);
					$wi__input_p && _scope($scope4_id, {});
				}, $wg__input_p);
				$wi__input_show__OR__input_p && _subscribe($wi__input_p && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", 0);
				return 0;
			}
		}, $scope1_id, "a", $wg__input_show, $wg__input_show);
		$wi__input_show__OR__input_p && _subscribe($wi__input_show && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<i>${_escape(x)}</i>`);
		_scope($scope3_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope3_id);
	}, void 0, "a2");
	_scope($scope0_id, {
		f: $wi__input_show && input.p,
		g: x,
		i: $wi__input_p && $input_p__closures,
		h: $wi__input_show && $input_show__closures
	});
	_resume_branch($scope0_id);
}, 1);
