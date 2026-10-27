// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	const Show = { content: _content("a1", ({ p, label }) => {
		const $scope2_id = _scope_id();
		const $Show_content__label__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $wg__p = _write_guard($scope2_reason, 1), $wg__label = _write_guard($scope2_reason, 2), $wi__p__OR__label = _write_if($scope2_reason, 0), $wi__label = _write_if($scope2_reason, 2);
		_await($scope2_id, "a", p, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}:${_text_resume($scope3_id, "b", x, $wg__p * 2)}</p>`);
			$wi__p__OR__label && _subscribe($wi__label && $Show_content__label__closures, _scope($scope3_id, {}), "a0", $wg__p || $wg__label);
			$wg__p || $wg__label || $wi__p__OR__label && _resume_branch($scope3_id);
		}, _write_guard($scope2_reason, 0));
		$wi__label && _scope($scope2_id, { j: $Show_content__label__closures });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(10 | _write_guard($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id();
			Show.content({
				p: Promise.resolve(n),
				label: input.label
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 0) && input.label,
		g: n
	});
}, 1);
