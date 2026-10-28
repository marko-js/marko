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
	const $scope0_reason = _scope_reason(), $wg__input_to = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_set_scope_reason($wg__input_to << 1 | $wg__input_to << 3);
	const $childScope = _peek_scope_id();
	my_for_default({
		to: input.to,
		content: _content_resume("a2", (i) => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<button class=r>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_subscribe($n__closures, _scope($scope1_id, {
				d: i,
				_: _scope_with_id($scope0_id)
			}), "a1");
		}, $scope0_id)
	});
	_scope($scope0_id, {
		e: n,
		f: $n__closures,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
	$wg__input_to || _resume_branch($scope0_id);
}, 1);
