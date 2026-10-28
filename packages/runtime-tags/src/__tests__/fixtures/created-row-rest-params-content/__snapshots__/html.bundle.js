// tags/my-for.marko
var my_for_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $wg__input_to = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, [...args], 0, 1, $wg__input_to__OR__input_content);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			b: _write_if($scope0_reason, 2) && args,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", $wg__input_to__OR__input_content, $wg__input_to);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			my_for_default({
				to: 2,
				content: _content("a2", (i) => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<button class=r>${_text_resume($scope2_id, "b", count)}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "a0");
					_subscribe($count__closures, _scope($scope2_id, {
						d: i,
						_: _scope_with_id($scope1_id)
					}), "a1");
				}, $scope1_id)
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	_scope($scope0_id, {
		e: count,
		f: $count__closures
	});
	$wg__input_show || _resume_branch($scope0_id);
}, 1);
